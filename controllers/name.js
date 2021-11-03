const nameRouter = require('express').Router()

/**
 * @function nameRouter.get
 * rendering the /name page
 */
nameRouter.get('/', (req, res) =>{
    res.render('name')
})

/**
 * @exports nameRouter (Will be /name)
 */
module.exports = nameRouter;