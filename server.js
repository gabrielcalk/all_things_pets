const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
// const helpers = require("./utils/helpers");
const Cats = require("./models/cats");
const Dogs = require("./models/dogs");
const Dognames = require("./models/dognames");
const Catnames = require("./models/catnames");
const User = require('./models/user');
const locations = require('./models/locations');
const sequelize = require("./config/connections");

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'Secret Secret',
    cookie: {
        // Stored in milliseconds (60000 === 1 minute)
        //Store for 15 Minutes
        maxAge: 900000,
      },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// app.engine("handlebars", hbs.engine);
app.engine("handlebars", exphbs())
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Routers
// Home Router: /
const homeRouter = require('./controllers/home');
app.use(homeRouter);

// SignUp Router: /signup
const signupRouter = require('./controllers/signup');
app.use('/signup', signupRouter);

// Login Router: /login
const loginRouter = require('./controllers/login');
app.use('/login', loginRouter);

// Questions Router: /questions
const questionsRouter = require('./controllers/questions');
app.use('/questions', questionsRouter);

// Info Router: /info
const infoRouter = require('./controllers/info');
app.use('/info', infoRouter);

// Name Router : /name
const nameRouter = require('./controllers/name');
app.use('/name', nameRouter)

// Info Router: /infoDogs
const infoDogsRouter = require('./routes/api/infoDogs');
app.use('/infoDogs', infoDogsRouter);

// 404 page
app.use((req,res) =>{
    res.sendFile(path.join(__dirname, './public', '/html', '404page.html'))
})

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}: http://localhost:${PORT}`))
});