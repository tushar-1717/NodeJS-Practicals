const express = require('express');
const app = express();

app.use(express.json());

let students = [
  {id: 1, name: "Rahul", course: "BCA", subject: "NodeJS"},
  {id: 2, name: "Sneha", course: "MCA", subject: "ReactJs"},
  {id: 3, name: "Deepali", course: "BSC", subject: "ExpressJS"},
  {id: 4, name: "Mrunal", course: "MSC", subject: "AngularJS"},
  {id: 5, name: "Sushil", course: "BTech", subject: "JavaScript"}
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

app.post('/students', (req, res) => {
  students.push(req.body);
  res.send("Students added successfully");
});

app.put('/students/:id', (req, res) => {
  const index = students.findIndex(s => s.id == req.params.id);
  students[index] = req.body;
  res.send("Student deleted successfully");
});

app.delete('/students/:id', (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.send("Student deleted successfully");
});

app.listen(6100, () => {
  console.log("Server running on http://localhost:6100");
});