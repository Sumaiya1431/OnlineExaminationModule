const mongoose = require('mongoose');

var Qb_dept = mongoose.model('Qb_dept', {
    dept: { type: String },
    category: { type: String },
    level: { type: Number },
    exam_type: { type: String },
    
});

module.exports = { Qb_dept };