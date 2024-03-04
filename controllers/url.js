const shortid = require('shortid');

const URL = require('../models/url');


// @route post : generate new url 
async function handleGenerateNewShortUrl(req, res) {

    const body = req.body;

    if(!body.url) return res.status(400).json({error: 'url is required'})
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitedHistory : [],
    });

    return res.render('home', {id : shortID});
    // return res.json({id: shortID});
}


// @route get : /analytics

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalClicks : result.visitHistory.length, 
    analytics : result.visitHistory.length,
    });
}



module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
};