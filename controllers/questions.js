const questionsRouter = require('express').Router()

questionsRouter.get('/', (req, res) =>{
    res.send('Questions Page')
})

module.exports = questionsRouter;