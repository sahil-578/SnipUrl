const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId : {
        unique: true, 
        required : true,
        type: String,
    },
    redirectUrl : {
        type: String,
        required : true,
    },
    visitHistory : [{
        timestamp : {
            type : Number 
        }
    }],
},
{
    timestamps : true
}

);

const URL= mongoose.model('url', urlSchema);

module.exports = URL;