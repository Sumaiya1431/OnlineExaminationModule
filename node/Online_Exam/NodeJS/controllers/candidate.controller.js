//require express library
var express = require('express');
var fs = require('fs')
var path = require('path')
var router = express.Router();
var multer = require('multer');
var DIR = './uploads/';
var mongoXlsx = require('mongo-xlsx');


//var upload = multer({dest: DIR}).single('photo');
/* GET home page. */

//mine
var csv = require('fast-csv');
var mongoose = require('mongoose');
var Candidate = require('../models/candidate.model');

var bucket = 'myBucket';
//mine ended
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
//console.log(global.id);
router.get('/', (req, res) => {
    Candidate.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Candidate :' + JSON.stringify(err, undefined, 2)); }
    });
});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage }).single('photo');

router.post('/', function (req, res, next) {
	 var path = '';
	 upload(req, res, function (err) {
	    if (err) {
	      // An error occurred when uploading
	      console.log(err);
	      //return res.status(422).send("an Error occured")
	    }  
			path = req.file.path;
			console.log("file :" + req.file);

    //mine 
		//var authorFile = req.files.file;
		//var authorFile = req.file;
		console.log("path" + req.file.path + "name" + req.file.filename);
        uploadFile(req.file.path);
        
    // var authors = [];
         
    // csv
    //  .fromString(authorFile.data.toString(), {
    //      headers: true,
    //      ignoreEmpty: true
    //  })
    //  .on("data", function(data){
    //      data['_id'] = new mongoose.Types.ObjectId();
          
    //      authors.push(data);
    //  })
    //  .on("end", function(){
    //      Author.create(authors, function(err, documents) {
    //         if (err) throw err;
    //      });
          
    //      res.send(authors.length + ' authors have been successfully uploaded.');
		//  });
		 //mine end

	    return res.send("Upload Completed for "+path); 
  });	 
})

/*
function uploadFile(source, target){

	fs.readFile(source, function (err, data) {

			if (!err) {

					// var params = {
					// 		Bucket      : bucket,
					// 		Key         : target,
					// 		Body        : data
					// };

					// s3.putObject(params,z function(err, data) {
					// 		if (!err) {
					// 				console.log('[s3] file uploaded:');
									//console.log(data);
									var questions = [];
			csv.fromString(data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
         data['qb_dept_id']=global.id; 
                 questions.push(data);
                 console.log(global.id);
				 //console.log(questions);
     })
     .on("end", function(){

         Question.create(questions, function(err, documents) {
            if (err) throw err;
         });
				 console.log(' questions have been successfully uploaded.')
		 });
									//fs.unlink(source); // optionally delete the file
					// 		}
					// 		else {
					// 				console.log(err);
					// 		}
					// });

			}
			else{
				console.log(err);
			}
	});
}*/
function uploadFile(source){
  var model = mongoXlsx.buildDynamicModel(Candidate);
	mongoXlsx.xlsx2MongoData(source,model, function(err, mongoData) {
    console.log('mongo size',mongoData.length);
    for(var i=0;i<mongoData.length;i++)
    {
      mongoData[i].exam_id = global.id; //add foreign key to be added here.
      //console.log('Mongo data:', mongoData[i].exam_id); 
    }
    Candidate.create(mongoData,(err)=>
    {
        if(!err);
						//console.log('Saved Mongo data:', mongoData); 
        else
        		console.log(err);
    });
	});
}

module.exports = router;