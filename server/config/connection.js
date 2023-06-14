const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
  collection: 'sessions',
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gameCenterDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  mongooseConnection: mongoose.connection,
  sessionStore,
};
