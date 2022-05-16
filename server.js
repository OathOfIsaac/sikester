const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const http = require('http');

const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);


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


//socket.io
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main');
});

io.on('connection', socket => {
  console.log('a user connected');

  //new user
  socket.emit('message', 'Welcome to Sikester!');

  //user has joined
  socket.broadcast.emit('message', 'A user has joined the chat');

  //user has left
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat!')
  })
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening on port 3001!'));
});