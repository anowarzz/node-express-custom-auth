const express = require('express');
const authControllers = require('../../controllers/authController')

const router = express.Router();

router.post('/register', authControllers.registerAUser);

router.post('/login', authControllers.loginAUser);






module.exports = router ;