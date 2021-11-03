const signupRouter = require('express').Router()
const User = require('../models/user')

signupRouter.get('/', (req, res) =>{
    res.render('signup', {layout:false})
});

signupRouter.post('/', async (req, res) =>{
    try{
        const {pets, email, password} = req.body
        const creat_user = await User.create({
            pets,
            email,
            password
        });
//Saving user_id, logged_in and post_id on the session
        req.session.save(() =>{
            req.session.user_id = creat_user.id;
            req.session.logged_in = true;
            res.status(200).json(creat_user)
        });
    } catch(err){
        res.status(500).send(err);
    }
});

module.exports = signupRouter;