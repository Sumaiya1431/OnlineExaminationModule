//local packages
require('./config/config');
require('./db');
require('./config/passportConfig');

// built-in packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
 
const rtsIndex = require('./routes/index.router');
var candidateController = require('./controllers/candidate.controller');
var qb_deptController = require('./controllers/qb_dept.controller.js');
var examController = require('./controllers/exam.controller.js');
var question_bankController = require('./controllers/question_bank.controller.js');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());  //act as connection btw backend and frontend which are running on diff port no
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
}); 

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

/*
app.use('/admin',AdminController);
app.use('/authenticate',AdminController.authenticate);
app.use('/userprofile',jwtHelper.verifyJwtToken,AdminController.userProfile);
*/
app.use('/exam', examController);
app.use('/candidate', candidateController);
app.use('/qb_dept', qb_deptController);
app.use('/question_bank', question_bankController);
