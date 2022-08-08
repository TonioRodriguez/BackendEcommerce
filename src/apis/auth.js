const jwt =require('jsonwebtoken')
const express =require('express')
const router= express.Router()

const UserService = require('../services/users')
const UserModel = require('../models/users')
const AuthService= require('../services/auth')
require('dotenv').config()

const userService = new UserService(userModel)
const authService = new AuthService(userService)
const JWT_SECRET = process.env.JWT_SECRET


router.post('login', async (req, res) =>{
    const {email, password} = req.body
    try{
        const user = await authService.login (email, password)
        const userRole= {
            ...user,
        role: 'admin',
        permissions: ['users:foo']
        }
        const token = jwt.sign({
            data: userRole,
            exp: Math.floor(Date.now()/1000)+(60*60)
        }, JWT_SECRET) 
        res.send({
            _id: user._id
        })
    }catch (error){
        console-log(error)
        res.status(401).send({
            message: error.message
        })
    }
})



module.exports