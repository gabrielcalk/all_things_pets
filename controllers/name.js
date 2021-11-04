const nameRouter = require('express').Router();
const DogNames = require('../models/dognames');
const CatNames = require('../models/catnames');
const Catnames = require('../models/catnames');

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
        res.render('add_name');
    }catch(err){
        res.status(500).json(err)
    }
});

nameRouter.post('/add_name', async(req, res) =>{
    try{
        const {name_pet_input_up, gender_input} = req.body
       if(req.body.type_input == 'cat'){
            const cats_name = await CatNames.findOne({
                where: {
                    name: name_pet_input_up
                }
            })
            console.log(cats_name)
            if(cats_name == null){
                const cat = await Catnames.create({
                    name: name_pet_input_up,
                    gender: gender_input
                })
                res.status(200).json(cat)
            } else{
                res.status(502).json({message: 'We Already Have This Name'})
                return 
            }
       } else{
                const dogs_name = await DogNames.findOne({
                    where: {
                        name: name_pet_input_up
                    }
                })
                console.log(dogs_name)
            if(dogs_name == null){
                const dog = await DogNames.create({
                    name: name_pet_input_up,
                    type: gender_input
                })
                res.status(200).json(dog)
            } else{
                res.status(502).json({message: 'We Already Have This Name'})
                return 
            }
        }
    }catch(err){
        res.status(500).json(err)
    }
});

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