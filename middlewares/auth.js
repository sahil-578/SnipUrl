const {getUser} = require('../service/auth');

async function restrictToLoginUserOnly(req, res, next) {
    // const userUuid = req.cookies?.uid;

    const userUuid = req.headers['authorization'];

    if(!userUuid) 
        return res.redirect('/login');

    const token = userUuid.split('Bearer ')[1];

    // const user = getUser(userUuid);

    const user = getUser(token);

    if(!user) 
        return res.redirect('/login');

    req.user = user;
    next();
}

module.exports = {
    restrictToLoginUserOnly,
}