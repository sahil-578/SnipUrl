// const sessionIdToMapUser = new Map();

const jwt = require('jsonwebtoken');
const secret = 'dIsh^1$2$3@kya_un'

// function setUser(id, user) {
//     sessionIdToMapUser.set(id, user);
// }

function setUser(user){
    return jwt.sign({
        id: user._id,
        email: user.email,
    }, secret);
}


// function getUser(id) {
//     return sessionIdToMapUser.get(id);
// }


function getUser(token){
    if(!token) 
        return null;
    try{
        return jwt.verify(token, secret);
    }
    catch(error){
        return null;
    }
}

module.exports = {
    setUser, 
    getUser
};