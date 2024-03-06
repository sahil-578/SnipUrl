const express = require('express');
const {handleAbout} = require('../controllers/about');
const router = express.Router();

router.post('/about', handleAbout);


module.exports = router;
