const homeRouter = require('express').Router()

homeRouter.get('/', (req, res) =>{
    var logout = false;
    if (req.session.logged_in){
        logout = true
    }
    res.render('homepage', {
        logout
    })
})

homeRouter.post('/', async(req, res) =>{
    try{
        if (req.session.logged_in) {
            req.session.destroy(() => {
            res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch(err){
        res.status(500).send(err)
    }
});

module.exports = homeRouter;