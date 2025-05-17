const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { sequelize } = require('./models');
const routes = require('./routes');
const config = require('./config/config.json');

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(session({ secret: config.sessionSecret, resave: false, saveUninitialized: false }));

app.use('/api', routes);

const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
});