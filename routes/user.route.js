const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');

router.post('/register', user_controller.register);
router.post('/login', user_controller.login);

module.exports = router;