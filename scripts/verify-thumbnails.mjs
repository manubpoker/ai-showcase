import { access, readFile } from "node:fs/promises";
import sharp from "sharp";
import {
  projectsFile,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  thumbnailsManifestFile,
  thumbnailsSrcDir,
  thumbnailsDir,
  repoRoot,
} from "./thumbnail-lib.mjs";

const projects = JSON.parse(await readFile(projectsFile, "utf8"));
const manifest = JSON.parse(await readFile(thumbnailsManifestFile, "utf8"));

const manifestIds = new Set(manifest.projects.map((entry) => entry.id));
const issues = [];

for (const project of projects) {
  const thumbnailPath = `${repoRoot}/${project.thumbnail}`.replace(/\\/g, "/");
  const svgPath = `${thumbnailsSrcDir}/${project.id}.svg`.replace(/\\/g, "/");

  if (!project.thumbnail) {
    issues.push(`${project.id}: missing thumbnail field in projects.json`);
    continue;
  }

  try {
    await access(thumbnailPath);
  } catch {
    issues.push(`${project.id}: missing PNG ${thumbnailPath}`);
  }

  try {
    await access(svgPath);
  } catch {
    issues.push(`${project.id}: missing SVG ${svgPath}`);
  }

  if (!manifestIds.has(project.id)) {
    issues.push(`${project.id}: missing manifest entry`);
  }

  try {
    const metadata = await sharp(thumbnailPath).metadata();
    if (metadata.width !== THUMBNAIL_WIDTH || metadata.height !== THUMBNAIL_HEIGHT) {
      issues.push(`${project.id}: expected ${THUMBNAIL_WIDTH}x${THUMBNAIL_HEIGHT}, found ${metadata.width}x${metadata.height}`);
    }
  } catch (error) {
    issues.push(`${project.id}: failed to inspect PNG (${error.message})`);
  }
}

if (manifest.projects.length !== projects.length) {
  issues.push(`manifest count mismatch: expected ${projects.length}, found ${manifest.projects.length}`);
}

if (issues.length) {
  console.error("Thumbnail verification failed:");
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Verified ${projects.length} showcase thumbnails in ${thumbnailsDir}.`);
