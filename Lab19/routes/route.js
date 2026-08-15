const express = require('express');
const router = express.Router();

// Home Route
router.get('/', (req, res) => {
    res.send("Welcome to Adventure Trails Application");
});

// Trails Route
router.get('/trails', (req, res) => {
    res.send("List of Adventure Trails");
});

// Booking Route
router.get('/booking', (req, res) => {
    res.send("Trail Booking Page");
});

// Contact Route
router.get('/contact', (req, res) => {
    res.send("Contact Adventure Trails Team");
});

module.exports = router;