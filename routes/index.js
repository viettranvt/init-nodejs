const express = require('express');
const router = express.Router({});

//here will declare the main routes of the module
router.use('/users', require('../modules/user/user.route'));
router.use('/auth', require('../modules/auth/auth.route'));

module.exports = router;
