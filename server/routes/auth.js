// Authentication routes for registering and logging in users

const express = require('express');
const router = express.Router();

// Mock database for users
const users = [];

// POST /register route to create a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Basic validation
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(409).send('User already exists.');
    }
    // Create new user
    users.push({ username, password }); // Hash the password in real scenario
    res.status(201).send('User registered successfully.');
});

// POST /login route for authenticating users
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Basic validation
    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }
    // Check for user
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(401).send('Invalid credentials.');
    }
    // Check for password - in real scenario, use hashing
    if (user.password !== password) {
        return res.status(401).send('Invalid credentials.');
    }
    res.status(200).send('User logged in successfully.');
});

module.exports = router;