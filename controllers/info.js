const infoRouter = require('express').Router();
const path = require('path');
const Locations = require('../models/locations')

infoRouter.get('/', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.render('info')
})

infoRouter.get('/places', (req, res) =>{
    if(!req.session.logged_in){
        res.redirect('/login')
        return
    }
    res.sendFile(path.join(__dirname, '../public', './html', 'places.html'))
})

infoRouter.post('/places', async (req, res) =>{
    try{
        const location_user = await Locations.findAll({
            where: {
                type: req.body.storedPlace
            }
        })
        res.status(200).json(location_user)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = infoRouter;