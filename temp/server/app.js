var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var multer = require('multer');
// var util = require('util'),
//     inspect = require('util').inspect;
// var Busboy = require('busboy');

//database connection - mongo db
// var mongojs = require('mongojs');
// var db = mongojs('contactlist',['contactlist']);

// var newname;
// var newRecord = {};





app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/** Serving from the same express Server
No cors required */
app.use(express.static('../client'));
app.use(bodyParser.json());

// var storage = multer.diskStorage({ //multers disk storage settings
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//       console.log(file.fieldname);
//         var datetimestamp = Date.now();
//         newname = file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
//
//         cb(null, newname);
//         console.log(newname);
//     }
//
// });
//
// var upload = multer({ //multer settings
//                 storage: storage
//             }).single('file');



// /** API path that will upload the files */
// app.post('/upload', function(req,res) {
//
//   upload(req,res,function(err){
//       if(err){
//            res.json({error_code:1,err_desc:err});
//            return; // if error occor exit form here
//       }
//   });s
//   // if file upload complete
//   var busboy = new Busboy({ headers: req.headers });
//   newRecord = {};
//   busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
//
//     newRecord[fieldname] = inspect(val);
//     console.log('Field [' + fieldname + ']: value: ' + inspect(val));
//     console.log("--------->");
//   });
//    busboy.on('finish', function() {
//      console.log('Done parsing form!');
//      console.log(newRecord);
//   });
//   req.pipe(busboy);
//
//   // after complete send respond to front end
//   res.json({error_code:0,err_desc:null});
//
//
//
//
// });

app.use('/upload', require('./controllers/cvupload.controller'));

app.use('/companylist',require('./controllers/companylist.controller')); //hardcoded

// //Todo
// app.use('/getcvlist',require('./controllers/........'));  //get cv list for givin company
// app.use('/getcvifno',require('./controllers/........'));  // get cv info for givin user
// app.use('/updateCV', require('./controllers/cvupload.controller'));


app.listen('3000', function(){
    console.log('running on 3000...');
});
