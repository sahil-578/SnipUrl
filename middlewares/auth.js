const {getUser} = require('../service/auth');

async function restrictToLoginUserOnly(req, res, next) {
    const userUuid = req.cookies?.uid;

    if(!userUuid) 
        return res.redirect('/login');

    const user = getUser(userUuid);

    if(!user) 
        return res.redirect('/login');

    req.user = user;
    next();
}

module.exports = {
    restrictToLoginUserOnly,
}