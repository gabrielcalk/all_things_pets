// Importing the User so that we can use the users input provide on the forms
// to check if that match with the email and password that we have on the database
const loginRouter = require('express').Router()
const User = require('../models/user')

/**
 * @function loginRouter.get
 * rendering the /login page
 * {layout: false} means that we are not usign the handlebars layout
 */
loginRouter.get('/', (req, res) =>{
    res.render('login', {layout: false})
})

/**
 * @function loginRouter.get
 * rendering the /login page
 * {layout: false} means that we are not usign the handlebars layout
 */
loginRouter.post('/', async (req, res) =>{
    try{
        const email_info = await User.findOne({
            where:{email: req.body.email}
        });
        if(!email_info){
            res.status(400).json({message: 'E-mail or Password Incorrect'});
            return
        } 
        const verifyPassword = email_info.checkPassword(req.body.password);
        if (!verifyPassword){
            res.status(400).json({message: 'Incorrect Email or Password!'})
        }
//Saving user_id, logged_in and post_id on the session
        req.session.save(() =>{
            req.session.user_id = email_info.id;
            req.session.logged_in = true;
            req.session.post_id = '0'
            res.status(200).json({message: 'You Are Logged In!'});
        })
    } catch(err){
        res.status(400).json(err);
    }
})

/**
 * @exports loginRouter (Will be /login)
 */
module.exports = loginRouter;