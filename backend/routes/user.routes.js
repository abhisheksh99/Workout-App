const {signUpUser,loginUser} = require("../controllers/user.controller")

const express = require ('express')

const router = express.Router()


//login route

router.post("/login",loginUser)




//signup route

router.post("/signup",signUpUser)


module.exports = router

