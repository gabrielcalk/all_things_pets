const infoRouter = require('express').Router()

infoRouter.get('/', (req, res) =>{
    res.render('info')
})

infoRouter.get('/fun-places', (req, res) =>{
    res.send('Fun Places Page')
})

infoRouter.get('/vets', (req, res) =>{
    res.send('Vet Page')
})

infoRouter.get('/daycare', (req, res) =>{
    res.send('Daycar Page')
})

infoRouter.get('/training', (req, res) =>{
    res.send('training Page')
})

module.exports = infoRouter;