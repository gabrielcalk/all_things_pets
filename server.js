const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const helpers = require("./utils/helpers");
const Cats = require("./models/Cats");
const Dogs = require("./models/Dogs")
const sequelize = require("./config/connections");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

const sess = {
    secret: process.env.SESS_SECRET,
    cookie:{},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
// app.use(session(sess));
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
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

// Pets Router: /pets-for-you
const petsRouter = require('./controllers/pets-for-you');
app.use('/pets-for-you', petsRouter);

// Info Router: /info
const infoRouter = require('./controllers/info');
app.use('/info', infoRouter);

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