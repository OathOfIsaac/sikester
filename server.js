const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');

//const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'process.env.SESSION_SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(routes);
app.use(require('./controllers/'));

// sync sequelize models to the database, then turn on the server
// Important!!! :) change to force: true, turn on server ;), then change to force: false...then it works :D! 
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});