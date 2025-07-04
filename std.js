//Create an obj with some sample data ,covert into json and save it to a file named student.json 

const fs = require('fs');

// Sample student object
const student = {
  id: 101,
  name: "John Doe",
  age: 20,
  courses: ["Math", "Physics", "Chemistry"],
  isEnrolled: true
};

// Convert object to JSON string
const jsonData = JSON.stringify(student, null, 2);

// Save JSON data to student.json file
fs.writeFile('student.json', jsonData, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('student.json saved successfully!');
  }
});
