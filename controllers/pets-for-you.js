const petsRouter = require('express').Router()

petsRouter.get('/', (req, res) =>{
    res.send('Pets Page')
})

module.exports = petsRouter;