const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

const User = require('../models/user')


router.get('/', (req,res)=>res.send('I am  G(root)'))

router.get('/allusers',controllers.getAllUsers )

router.get('/newUser/:userName/:password/:profilePic',  controllers.createUser)

router.get('/checkUser/:userName/:password', controllers.checkUser)

router.get('/deleteUser/:id', controllers.deleteUser)

router.get('/updateUser/:id/:newName', controllers.updateUser)

router.get('/newPost/:content/:user_id', controllers.createPost)

router.get('/user/:id', controllers.getUser)

router.get('/recentPosts',controllers.getRecentPosts)

router.get('/getPostIndex', controllers.getPostIndex)

router.get('/resetPostIndex', controllers.resetPostIndex)

router.get('/wipePosts', controllers.wipePosts)

router.get('/deleteUserPost', controllers.deleteUserPosts)


module.exports = router

///backend routes