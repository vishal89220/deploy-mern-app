const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const token = req.headers['authorization']
    console.log(token,'token');
    
    if (!token) {
        return res.status(403).json({ message: 'access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.Jwt_secret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: err.message });
    }
};

module.exports = ensureAuthenticated;
