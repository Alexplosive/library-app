const express = require('express')
const router = express.Router();

const { login, createAccount } = require('../controllers/userController');

router.post('/login', login)
router.post('/signup', createAccount)

module.exports = router;