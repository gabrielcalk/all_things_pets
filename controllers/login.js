const loginRouter = require('express').Router()

loginRouter.get('/', (req, res) =>{
    res.render('login', {layout: false})
})

module.exports = loginRouter;