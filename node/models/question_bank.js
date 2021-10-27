var mongoose = require('mongoose');
 
var authorSchema = mongoose.Schema({
   // Sl No	Question	Choice A	Choice B	Choice C	Choice D	Answer
   //Sl No	Question	Choice A	Choice B	Choice C	Choice D	Question - Hindi	Choice A - Hindi	Choice B - Hindi	Choice C - Hindi	Choice D - Hindi	Answer
    //ques_id:String,
    // sl_no: Number,
    // question: String,
    // choice_a: String,
    // choice_b: String,
    // choice_c: String,
    // choice_d: String,
    // question_hindi: String,
    // choice_a_hindi: String,
    // choice_b_hindi: String,
    // choice_c_hindi: String,
    // choice_d_hindi: String,
    // answer: String,
    // firstName: String,
    // lastName: String,
    // biography: String,
    // twitter: {
    //     type: String,
    //     // validate: {
    //     //     validator: function(text) {
    //     //         if (text !== null && text.length > 0)
    //     //             return text.indexOf('https://twitter.com/') === 0;
                 
    //     //         return true;
    //     //     },
    //     //     message: 'Twitter handle must start with https://twitter.com/'
    //     // }
    // },
    // facebook: {
    //     type: String,
    //     // validate: {
    //     //     validator: function(text) {
    //     //         if (text !== null && text.length > 0)
    //     //             return text.indexOf('https://www.facebook.com/') === 0;
                 
    //     //         return true;
    //     //     },
    //     //     message: 'Facebook Page must start with https://www.facebook.com/'
    //     // }
    // },
    // linkedin: {
    //     // type: String,
    //     // validate: {
    //     //     validator: function(text) {
    //     //         if (text !== null && text.length > 0)
    //     //             return text.indexOf('https://www.linkedin.com/') === 0;
                 
    //     //         return true;
    //     //     },
    //     //     message: 'LinkedIn must start with https://www.linkedin.com/'
    //     // }
    // },
    sl_no: Number,
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
    qb_dept_id:String,
    created: { 
        type: Date,
        default: Date.now
    }
});
 
var Question = mongoose.model('Question', authorSchema);
 
module.exports = Question;