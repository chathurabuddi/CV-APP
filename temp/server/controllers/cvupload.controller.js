var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');
var multer = require('multer');
var util = require('util'),
    inspect = require('util').inspect;
var Busboy = require('busboy');
//
// var mongojs = require('mongojs');
// var db = mongojs('contactlist',['contactlist']);
//

////
var config = require('config.json');
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/mycvapp", { native_parser: true });
db.bind('cvData');




/////

var newname;
var newRecord = {};


var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      console.log(file.fieldname);
        var datetimestamp = Date.now();
        newname = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];

        cb(null, newname);
        console.log(newname);
    }

});

var upload = multer({ storage: storage}).single('file');


router.get('/', function (req, res) {
    return res.render('upload');
});

router.post('/', function (req, res) {
  upload(req,res,function(err){
       if(err){
            return res.json({error_code:1,err_desc:err});
            // return; // if error occor exit form here
       }
   });
   // if file upload complete
   var busboy = new Busboy({ headers: req.headers });
   newRecord = {};
   busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {

     newRecord[fieldname] = inspect(val);
     console.log('Field [' + fieldname + ']: value: ' + inspect(val));
     console.log("--------->");
   });
    busboy.on('finish', function() {
      console.log('Done parsing form!');
      console.log(newRecord);
   });
   req.pipe(busboy);


   db.cvData.insert(newRecord,function (err, doc) {
                   if (err){
                     console.log(err);
                   } else {
                     console.log("Complete" + doc);
                   }
     });

   // after complete send respond to front end
   return res.json({error_code:0,err_desc:null});

  });






module.exports = router;
