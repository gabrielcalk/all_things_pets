const nameRouter = require('express').Router()

nameRouter.get('/', (req, res) =>{
    res.render('name')
})



module.exports = nameRouter;