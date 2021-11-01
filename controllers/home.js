const homeRouter = require('express').Router()

homeRouter.get('/', (req, res) =>{
    res.send('Home Page')
})

module.exports = homeRouter;