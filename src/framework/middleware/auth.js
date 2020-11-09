const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    let bearerToken = req.headers.authorization,
        token;

    if (bearerToken.startsWith("Bearer "))
        token = bearerToken.substring(7, bearerToken.length);


    try {

        user = await jwt.verify(token, '12345')
        req.user = user
        next();

    } catch (e) {
        console.log(e);
        res.status(400).json({ 'error': 'Token Invalid' });
    }
}