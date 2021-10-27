var mongoose = require('mongoose');

var currentQuesSchema = mongoose.Schema({
    question: String,
    choice_a: String,
    choice_b: String,
    choice_c: String,
    choice_d: String,
    question_hindi: String,
    choice_a_hindi: String,
    choice_b_hindi: String,
    choice_c_hindi: String,
    choice_d_hindi: String,
    answer: String,
    exam_id:String,
    created: { 
        type: Date,
        default: Date.now
    }
});
 
var CurrentQues = mongoose.model('CurrentQues', currentQuesSchema);
 
module.exports =CurrentQues;