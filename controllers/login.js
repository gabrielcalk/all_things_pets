const loginRouter = require('express').Router()

loginRouter.get('/', (req, res) =>{
    res.render('login', {layout: false})
})

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

module.exports = loginRouter;