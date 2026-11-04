import process from 'node:process';
import path from 'node:path';

const filename = process.argv[2] || "";
const extension = path.extname(filename);

function main(): string {
  return(`Filename: ${filename}, Extension: ${extension}\n`);
}

console.log(main());
