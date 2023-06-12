const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth')
const {createUser} = require('../../controllers/userController')

router.route('/').post(createUser).put(authMiddleware)

module.exports = router

