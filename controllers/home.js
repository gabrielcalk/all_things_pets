const homeRouter = require('express').Router()

homeRouter.get('/', (req, res) =>{
    res.render('homepage')
})

module.exports = homeRouter;