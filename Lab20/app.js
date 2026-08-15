const express = require('express');
const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// -------- Logging Middleware --------
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method} | URL: ${req.url}`);
    next();
});

// -------- Home Page (Form) --------
app.get('/', (req, res) => {
    res.send(`
        <h2>MyNotes Application</h2>
        <form method="POST" action="/addnote">
            Enter Note: <input type="text" name="note"/>
            <button type="submit">Add Note</button>
        </form>
    `);
});

// -------- Handle POST Submission --------
app.post('/addnote', (req, res, next) => {

    const note = req.body.note;

    // Customized Error Message
    if (!note || note.trim() === "") {
        const err = new Error("Note cannot be empty!");
        return next(err);
    }

    res.send(`Note Added Successfully: ${note}`);
});

// -------- Error Handling Middleware --------
app.use((err, req, res, next) => {
    res.status(400).send(`
        <h3 style="color:red;">Error: ${err.message}</h3>
        <a href="/">Go Back</a>
    `);
});

// -------- Start Server --------
app.listen(3000, () => {
    console.log("MyNotes App running at http://localhost:3000");
});
