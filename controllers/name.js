const nameRouter = require('express').Router();
const DogNames = require('../models/dognames');
const CatNames = require('../models/catnames');

/**
 * @function nameRouter.get
 * rendering the /name page
 */
nameRouter.get('/', async(req, res) =>{
    try{
        res.render('name')
    }catch(err){
        res.status(500).json(err)
    }
});

nameRouter.get('/add_name', async(req, res) =>{
    try{
        res.send('Added')
    }catch(err){
        res.status(500).json(err)
    }
})

nameRouter.get('/api/dogs', async(req, res) =>{
    try{
        const dogs = await DogNames.findAll({});
        const dogs_data = dogs.map((dog) => dog.get({plain: true}))
        res.status(200).json(dogs_data)
    }catch(err){
        res.status(500).json(err)
    }
});

nameRouter.get('/api/cats', async(req, res) =>{
    try{
        const cats = await CatNames.findAll({});
        const cats_data = cats.map((cat) => cat.get({plain: true}))
        res.status(200).json(cats_data)
    }catch(err){
        res.status(500).json(err)
    }
});

/**
 * @exports nameRouter (Will be /name)
 */
module.exports = nameRouter;