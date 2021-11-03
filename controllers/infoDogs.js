const infoDogsRouter = require('express').Router();
const Dogs = require('../models');

infoDogsRouter.get('/', async (req, res) => {
    try{
      const dogs_data  = await dogs.findAll({
        include: [{model: Dogs} ]
      })
      res.status(200).json(dogs_data)
    }catch(err){
      res.status(400).json(err)
    }
});

<<<<<<< HEAD
module.exports = infoDogsRouter
=======
infoDogsRouter.post('/', async (req, res) => {
  try {
    const dogs_data = await dogs.create(req.body);
    res.status(200).json(dogs_data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = infoDogsRouter;
>>>>>>> d228c29e52dbbb066be03ddbf08c07deb6ab9969
