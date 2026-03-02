// authController.js

// Function to handle user registration
async function register(req, res) {
    const { username, password } = req.body;
    // Here, you would typically hash the password and save the user to the database.
    // For now, let's just send a response.
    return res.status(201).json({ message: 'User registered successfully!', user: { username } });
}

// Function to handle user login
async function login(req, res) {
    const { username, password } = req.body;
    // Here, you would typically verify the user's credentials.
    // For now, let's just send a response.
    if (username === 'test' && password === 'test') {
        return res.status(200).json({ message: 'Login successful!', user: { username } });
    } else {
        return res.status(401).json({ message: 'Invalid credentials!' });
    }
}

module.exports = { register, login };