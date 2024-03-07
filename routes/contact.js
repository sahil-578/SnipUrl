const express = require('express');
const {handleContact} = require('../controllers/contact');
const router = express.Router();

router.post('/contact', handleContact);


module.exports = router;
