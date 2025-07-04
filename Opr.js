//write a node js application to perform operation Create write appendd read delete

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

function createFile() {
  fs.open(filePath, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.log('File already exists.');
      } else {
        console.error('Error creating file:', err);
      }
      return;
    }
    console.log('File created.');
    fs.close(fd, () => {});
  });
}

function writeFile(content) {
  fs.writeFile(filePath, content, err => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File written.');
  });
}

function appendFile(content) {
  fs.appendFile(filePath, content, err => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Content appended.');
  });
}

function readFile() {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:\n', data);
  });
}

function deleteFile() {
  fs.unlink(filePath, err => {
    if (err) {
      console.error('Error deleting file:', err);
      return;
    }
    console.log('File deleted.');
  });
}

// Example usage:

// Uncomment to test each operation one by one:

// createFile();
// writeFile('Hello World!\n');
// appendFile('Appended text.\n');
// readFile();
// deleteFile();
