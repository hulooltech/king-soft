const jwt = require('jsonwebtoken');

// Middleware to verify JWT tokens
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user; // Save the user info to request object
        next(); // Proceed to the next middleware
    });
}

module.exports = authenticateToken;