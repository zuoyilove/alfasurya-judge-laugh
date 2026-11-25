import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "Our printer has been 'warming up' since 2019 — the only employee here who has never asked for a raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(joke);
