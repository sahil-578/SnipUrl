const path = require('path');

async function handleAbout(req, res) {
    res.sendFile(path.join(__dirname, '../views/about.ejs'));
}

// Export controller methods
module.exports = {
    handleAbout
};
