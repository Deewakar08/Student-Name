const fs = require('fs');
const path = require('path');

// Change this to your input path
const inputPath = "C:\Users\SBUP\Desktop\Node Js @2403080\File123.txt";

fs.stat(inputPath, (err, stats) => {
  if (err) {
    return console.error("Error reading path:", err.message);
  }

  if (stats.isDirectory()) {
    console.log(`${inputPath} is a directory.`);
    // Optionally list files inside the directory
    fs.readdir(inputPath, (err, files) => {
      if (err) {
        return console.error("Error reading directory:", err.message);
      }
      console.log("Files in directory:");
      files.forEach(file => console.log(file));
    });
  } else if (stats.isFile()) {
    console.log(`${inputPath} is a file.`);

    // Truncate the file to 7 bytes
    fs.truncate(inputPath, 7, (err) => {
      if (err) {
        return console.error("Error truncating file:", err.message);
      }
      console.log("File truncated to 7 bytes.");
    });
  } else {
    console.log("Path is neither a file nor a directory.");
  }
});
