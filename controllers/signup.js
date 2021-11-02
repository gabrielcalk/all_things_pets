const signupRouter = require('express').Router()

signupRouter.get('/', (req, res) =>{
    res.render('signup', {layout:false})
})

module.exports = signupRouter;