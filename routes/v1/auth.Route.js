const express = require('express');
const { registerAUser, loginAUser } = require('../../controllers/authController');

const router = express.Router();

router.post('/api/v1/register', registerAUser);

router.post('/api/v1/login', loginAUser);
