import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const portArg = process.argv.find((arg) => arg.startsWith("--port"));
const port = Number(portArg?.split("=")[1] || process.env.PORT || 4173);

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function createResponseBridge(nodeRes) {
  return {
    status(code) {
      nodeRes.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      nodeRes.setHeader(name, value);
      return this;
    },
    json(payload) {
      if (!nodeRes.hasHeader("Content-Type")) {
        nodeRes.setHeader("Content-Type", "application/json; charset=utf-8");
      }
      nodeRes.end(JSON.stringify(payload));
    },
    send(payload) {
      nodeRes.end(payload);
    },
  };
}

async function parseBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

async function handleApiRequest(req, res, url) {
  const relative = url.pathname.replace(/^\/api\//, "");
  const modulePath = path.join(rootDir, "api", `${relative}.js`);

  try {
    await stat(modulePath);
  } catch {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "API route not found" }));
    return;
  }

  const handlerModule = await import(pathToFileURL(modulePath).href);
  const query = Object.fromEntries(url.searchParams.entries());
  const body = req.method === "POST" ? await parseBody(req) : null;
  const request = { method: req.method, query, body, headers: req.headers, url: req.url };
  const response = createResponseBridge(res);
  await handlerModule.default(request, response);
}

async function handleStaticRequest(res, url) {
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  const filePath = path.join(rootDir, pathname);
  try {
    const fileStat = await stat(filePath);
    const resolvedPath = fileStat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const contents = await readFile(resolvedPath);
    const ext = path.extname(resolvedPath).toLowerCase();
    res.statusCode = 200;
    res.setHeader("Content-Type", MIME_TYPES[ext] || "application/octet-stream");
    res.end(contents);
  } catch {
    res.statusCode = 404;
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);

  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApiRequest(req, res, url);
      return;
    }
    await handleStaticRequest(res, url);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`showcase dev server listening on http://127.0.0.1:${port}`);
});
