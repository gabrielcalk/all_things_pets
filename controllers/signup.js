const signupRouter = require('express').Router()

signupRouter.get('/', (req, res) =>{
    res.send('Signup Page')
})

module.exports = signupRouter;