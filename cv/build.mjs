// Renders cv/cv.html to public/cv/Induwara-Ihalavithana-CV.pdf with a local Edge or Chrome.
// Usage: node cv/build.mjs
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "cv", "cv.html");
const output = join(root, "public", "cv", "Induwara-Ihalavithana-CV.pdf");

const browsers = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error("No Edge or Chrome found to render the CV.");

mkdirSync(dirname(output), { recursive: true });
rmSync(output, { force: true });
// A throw-away profile keeps the browser from handing off to an already-open window,
// so the call only returns once the PDF is written.
const profile = mkdtempSync(join(tmpdir(), "cv-browser-"));
execFileSync(browser, [
  "--headless",
  `--user-data-dir=${profile}`,
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${output}`,
  pathToFileURL(source).href,
]);
// On Windows the launcher can return before the PDF lands; wait for it.
const deadline = Date.now() + 30_000;
while (!existsSync(output) && Date.now() < deadline) await new Promise((r) => setTimeout(r, 250));
if (!existsSync(output)) throw new Error("The browser did not write the PDF.");
rmSync(profile, { recursive: true, force: true });
console.log(`CV written to ${output}`);
