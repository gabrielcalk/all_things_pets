const infoDogsRouter = require('express').Router();
const Dogs = require('../models');

infoDogsRouter.get('/', async (req, res) => {
    try{
      const product_data = await Product.findAll({
        include: [{model: Dogs} ]
      })
      res.status(200).json(dogs_data)
    }catch(err){
      res.status(400).json(err)
    }
});

module.exports = infoDogsRouter