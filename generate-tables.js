const fs = require("fs");
const path = require("path");

const NUM_TABLES = 150;
const NUM_ROWS = 10;

const tooManyTablesFile = fs.createWriteStream(
  path.join(__dirname, "docs", "too-many-tables.mdx")
);

tooManyTablesFile.write(`---
title: Too Many Tables
description: I have too many tables and cause errors
---\n\n`);

for (let table = 1; table <= NUM_TABLES; table++) {
  tooManyTablesFile.write(`## Table ${table}\n\n`);
  tooManyTablesFile.write(
    "| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |\n"
  );
  tooManyTablesFile.write("| --- | --- | --- | --- | --- |\n");
  for (let row = 1; row <= NUM_ROWS; row++) {
    for (let column = 1; column <= 5; column++) {
      tooManyTablesFile.write(`| Table ${table}, column ${column}, row ${row}`);
    }
    tooManyTablesFile.write("|\n");
  }
  tooManyTablesFile.write("\n");
}

tooManyTablesFile.close();
