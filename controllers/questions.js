const questionsRouter = require('express').Router()

/**
 * @function questionsRouter.get
 * rendering the /questions page
 */
questionsRouter.get('/', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.render('questions')
})

questionsRouter.get('/pets-for-you', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.send('pets-for-you')
})

/**
 * @exports questionsRouter (Will be /questions)
 */
module.exports = questionsRouter;