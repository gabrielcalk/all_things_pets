const questionsRouter = require('express').Router()

/**
 * @function questionsRouter.get
 * rendering the /questions page
 */
questionsRouter.get('/', (req, res) =>{
    res.render('questions')
})

/**
 * @exports questionsRouter (Will be /questions)
 */
module.exports = questionsRouter;