const loginRouter = require('express').Router()

loginRouter.get('/', (req, res) =>{
    res.send('Login Page')
})

module.exports = loginRouter;