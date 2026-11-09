import process from 'node:process';
import path from 'node:path';
import fs from 'node:fs/promises'


// node <executable> <database file>
const databaseFile = process.argv[2];

// Check that file exists
if (!databaseFile) {
  console.error('Error: Please provide a filename.');
  process.exit(1);
}

const extension = path.extname(databaseFile);  
// Check that database file is sql
if (extension !== ".sql"){
  console.log("The database file must be of type .sql");
  process.exit(1);
}

console.log(`Filename: ${databaseFile}`);
console.log(`Extension: ${extension}`);

console.log("Opening File ...\n\n\n");
try {
  const data = await fs.readFile(databaseFile, {encoding: 'utf8'});
  console.log(data);
} catch (err){
  console.error(err);
}
