const jwt = require('jsonwebtoken');

function getToken(userId) {
    let token = jwt.sign({
        userId
    }, 'supersecret', {
        expiresIn: 60 * 60 * 24 * 3
    })

    return token;
}

module.exports = {
    getToken
}