//Write a node js application to check whether a given name is file or directory. If Directory display the list of files and subdirectories 

const fs = require('fs');
const path = require('path');

function checkPath(inputPath) {
  fs.stat(inputPath, (err, stats) => {
    if (err) {
      console.error('Error reading path:', err.message);
      return;
    }

    if (stats.isFile()) {
      console.log(`${inputPath} is a file.`);
    } else if (stats.isDirectory()) {
      console.log(`${inputPath} is a directory.`);
      fs.readdir(inputPath, (err, files) => {
        if (err) {
          console.error('Error reading directory:', err.message);
          return;
        }
        console.log('Contents:');
        files.forEach(file => {
          console.log(' -', file);
        });
      });
    } else {
      console.log(`${inputPath} is neither a file nor a directory.`);
    }
  });
}

// Example usage: pass the path as a command-line argument
const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Please provide a path to check.');
  process.exit(1);
}

checkPath(inputPath);
