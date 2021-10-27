const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var question_bankController = require('./controllers/question_bankController.js');

var app = express();
 
const { mongoose } = require('./db.js');
var qb_deptController = require('./controllers/qb_deptController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/qb_depts', qb_deptController);
app.use('/question_banks', question_bankController);
module.exports=app;