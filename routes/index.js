const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

const User = require('../models/user')


router.get('/', (req,res)=>res.send('I am  G(root)'))

router.get('/allusers',controllers.getAllUsers )

router.get('/newUser/:userName/:password/:profilePic',  controllers.createUser)


router.get('/checkUser/:userName/:password', controllers.checkUser)

router.get('/deleteUser/:id', controllers.deleteUser)
module.exports = router

