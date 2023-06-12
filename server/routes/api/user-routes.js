const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth')
const {createUser, getAllUsers} = require('../../controllers/userController')

router.route('/').post(createUser).put(authMiddleware)
router.route('/').get(getAllUsers)

module.exports = router

