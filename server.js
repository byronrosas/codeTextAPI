require('dotenv').config({ path: './sample.env' });

const createError = require('http-errors');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const textRouter = require('./routes/text');

const port = process.env.API_SERVER_PORT || 3000;

//MIDDLEWARES
app.use(bodyParser.json()) // for parsing application/json


//ROUTES
//greeting route
app.use('/', indexRouter);
//text routes
app.use('/text', textRouter);

// 404 
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(port, () => {
	console.log(`API server listen by port ${port}`);
});
	
module.exports = app;