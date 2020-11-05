const bcrypt = require('bcryptjs');

function hashPassword(password) {
    let salt = bcrypt.genSaltSync(12);

    let hashedPassword = bcrypt.hashSync(password, salt);

    return hashedPassword;
}

function comparePasswords(hashed, raw) {
    return bcrypt.compareSync(raw, hashed)
}

module.exports = {
    hashPassword,
    comparePasswords
}