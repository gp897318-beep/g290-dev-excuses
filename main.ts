import { mkdirSync, writeFileSync } from "node:fs";

// One funny single-line excuse a developer gives when code breaks in
// production. The gate needs 1-200 chars, a single line, not only
// whitespace — so refuse to write anything that would fail it.
const line =
  "The bug’s been live for three weeks. I only fixed the monitoring that was hiding it.";

if (!line.trim() || line.length > 200 || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
