const questionsRouter = require('express').Router()
const Cats = require('../models/cats')

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
});

questionsRouter.get('/dogs-for-you', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.send('dogs-for-you')
});

questionsRouter.get('/cat', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.render('questions_cat')
});

questionsRouter.post('/cat/data', async (req, res) =>{
    try{
        if(!req.session.logged_in){
            res.redirect('/login')
            return
        }
        console.log(req.body.inputs_picked[0])
        const cats_user = await Cats.findAll({})
        const cats_data = cats_user.map((cat) => cat.get({plain: true}))
        res.status(200).json(cats_data)
    }catch(err){
        res.status(500).json(err)
    }
});

questionsRouter.get('/dog', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.render('questions_dog')
});
/**
 * @exports questionsRouter (Will be /questions)
 */
module.exports = questionsRouter;