const express = require('express')
const routes = require('./routes');
const db = require('./db')
const bodyParser = require('body-parser');
const logger = require('morgan');

//PORT Access
const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use('/api', routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () =>console.log(`express listening on port ${PORT}`))
