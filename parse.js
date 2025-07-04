//Write a program to read student.json and parse it back into a javascript object and display the content 

// Load the 'fs' module to work with the file system
const fs = require('fs');

// Read the JSON file asynchronously
fs.readFile('student.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading student.json:', err);
    return;
  }

  try {
    // Parse JSON data into a JavaScript object
    const student = JSON.parse(data);

    // Display the content
    console.log('Student Details:', student);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});
