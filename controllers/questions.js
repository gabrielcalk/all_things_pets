const questionsRouter = require('express').Router()

questionsRouter.get('/', (req, res) =>{
    res.render('questions')
})

module.exports = questionsRouter;