const express = require('express');
var router = express.Router();
//var ObjectId = require('mongoose').Types.ObjectId;
require('./question_bank.controller');
var { Exam } = require('../models/exam.model');
var Question = require('../models/question_bank.model');
router.get('/', (req, res) => {
    Exam.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var ex = new Exam({
        name: req.body.name,
        designation: req.body.designation,
        //post: req.body.post,
        duration: req.body.duration,
        date : req.body.date,
        time : req.body.time,
        // no_of_cand:req.body.no_of_cand,
         no_of_ques:req.body.no_of_ques
        // no_of_vac:req.body.no_of_vac,
        // dept_id:req.body.dept_id,
        // password:req.body.password
    });
    ex.save((err, doc) => {
        if (!err) { 
            console.log("Successfully uploaded");
            global.id=ex._id;
            //global.count=ex.no_of_ques;
            Question.findRandom().limit(ex.no_of_ques).exec(function (err, results) {
                console.log("Random Data:::",results);
              });
            res.send(doc); 
        }
        else { console.log('Error in Exam Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

    


module.exports =router;