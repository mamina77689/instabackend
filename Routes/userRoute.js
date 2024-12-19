const { Router } = require('express')
const { signup, login, userPosts, follow, unfollow } = require('../Controller/userController')

const userModel = require("../Models/userSchema")
const userRoute = Router()
const auth = require('../authenticator')

userRoute.post('/signup', signup)

userRoute.post('/login', login)

userRoute.post('/user/posts', auth, userPosts)

userRoute.post('/user/follow', auth, follow)

userRoute.delete('/user/unfollow', auth, unfollow)

module.exports = userRoute