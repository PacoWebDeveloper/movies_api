const router = require('express').Router()

const userServices = require('./users.services')
const passportJwt = require('../middleware/auth.middleware')

router.get('/users', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)

router.get('/users/me', passportJwt, userServices.getMyUser)
router.patch('/users/me', passportJwt,userServices.patchMyUser)
router.delete('/users/me', passportJwt, userServices.deleteMyUser)

router.get('/users/:id', userServices.getUserById)
router.patch('/users/:id', userServices.patchUser)
router.delete('/users/:id', userServices.deleteUser)

module.exports = router