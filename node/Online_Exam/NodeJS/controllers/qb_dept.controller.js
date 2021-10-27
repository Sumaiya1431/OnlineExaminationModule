const express = require('express');
var router = express.Router();
 //ide="das";
//module.exports=ide;
//console.log(ide);
var { Qb_dept } = require('../models/qb_dept.model');
router.get('/', (req, res) => {
    Qb_dept.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Qb_dept :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var ex = new Qb_dept({
        dept: req.body.dept,
        category: req.body.category,
        level: req.body.level,
        exam_type: req.body.exam_type,
        
    });
    ex.save((err, doc) => {
        if (!err) { res.send(doc);
           global.id=ex._id;
           //console.log(id);
     }
        else { console.log('Error in qb_dept Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports =router;
