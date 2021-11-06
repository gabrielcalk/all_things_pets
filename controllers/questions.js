const questionsRouter = require('express').Router()
const Cats = require('../models/cats');
const Dogs = require('../models/dogs');

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
    res.render('questions_cat',  {
        layout:false})
});

questionsRouter.post('/cat/data', async (req, res) =>{
    try{
        if(!req.session.logged_in){
            res.redirect('/login')
            return
        }
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
    res.render('questions_dog', {
        layout:false})
});

questionsRouter.get('/dog/data', async (req, res) =>{
    try{
        if(!req.session.logged_in){
            res.redirect('/login')
            return
        }
        const dogs_user = await Dogs.findAll({})
        const dogs_data = dogs_user.map((dog) => dog.get({plain: true}))
        res.status(200).json(dogs_data)
    }catch(err){
        res.status(500).json(err)
    }
});

/**
 * @exports questionsRouter (Will be /questions)
 */
module.exports = questionsRouter;