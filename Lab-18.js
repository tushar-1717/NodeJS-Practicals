const fs = require('fs');

// Data to write
const data = "Mongo, Express";

// Create and write into src.txt
fs.writeFile('src.txt', data, (err) => {
    if (err) {
        console.log("Error creating file");
    } else {
        console.log("File created successfully and data added!");
    }
});
