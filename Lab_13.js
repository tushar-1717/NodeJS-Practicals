// Import express module
const express = require('express');
const app = express();

// Server port
const PORT = 3000;

// Student data (Array of objects)
const students = [
    { id: 1, name: "Rahul", course: "BCA", marks: 85 },
    { id: 2, name: "Sneha", course: "MCA", marks: 90 },
    { id: 3, name: "Amit", course: "B.Tech", marks: 78 },
    { id: 4, name: "Priya", course: "MCA", marks: 88 }
];

// Home route
app.get('/', (req, res) => {
    res.send("<h2>Welcome to Student Information App</h2><br>Go to /students to see student details");
});

// Route to display student information
app.get('/students', (req, res) => {

    let html = "<h2>Student Information</h2>";
    html += "<table border='1'><tr><th>ID</th><th>Name</th><th>Course</th><th>Marks</th></tr>";

    students.forEach(s => {
        html += `<tr>
                    <td>${s.id}</td>
                    <td>${s.name}</td>
                    <td>${s.course}</td>
                    <td>${s.marks}</td>
                 </tr>`;
    });

    html += "</table>";

    res.send(html);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});