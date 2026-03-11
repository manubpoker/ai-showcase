import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import {
  buildProjectDesign,
  projectsFile,
  renderProjectSvg,
  thumbnailsDir,
  thumbnailsManifestFile,
  thumbnailsSrcDir,
} from "./thumbnail-lib.mjs";

const projects = JSON.parse(await readFile(projectsFile, "utf8"));

await mkdir(thumbnailsDir, { recursive: true });
await mkdir(thumbnailsSrcDir, { recursive: true });

const manifest = {
  version: 1,
  projects: [],
};

for (const project of projects) {
  const design = buildProjectDesign(project);
  const svg = renderProjectSvg(project, design);
  const svgPath = path.join(thumbnailsSrcDir, `${project.id}.svg`);
  const pngPath = path.join(thumbnailsDir, `${project.id}.png`);

  await writeFile(svgPath, svg, "utf8");
  await sharp(Buffer.from(svg)).png().toFile(pngPath);

  project.thumbnail = `thumbnails/${project.id}.png`;
  manifest.projects.push({
    id: project.id,
    motif: design.motif,
    theme: design.themeKey,
  });
}

await writeFile(projectsFile, `${JSON.stringify(projects, null, 2)}\n`, "utf8");
await writeFile(thumbnailsManifestFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(`Generated ${projects.length} showcase thumbnails.`);
