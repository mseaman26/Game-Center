const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth')
const {createUser, getAllUsers, login, signUp, getUserById, nerdleResult} = require('../../controllers/userController')

// router.route('/').post(createUser).put(authMiddleware)
router.route('/').get(getAllUsers)
router.route('/user').get(getUserById)
router.route('/login').post(login)
router.route('/signUp').post(signUp)
router.route('/nerdle').put(nerdleResult)

module.exports = router

