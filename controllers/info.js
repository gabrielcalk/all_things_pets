const infoRouter = require('express').Router()
const path = require('path')

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
    res.sendFile(path.join(__dirname, '../infoAndPlacePages', 'places.html'))
})

module.exports = infoRouter;