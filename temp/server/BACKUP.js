    var express = require('express');
    var app = express();
    //var bodyParser = require('body-parser');
    var multer = require('multer');
    var util = require('util');
    var Busboy = require('busboy');

    var newname;

    app.use(function(req, res, next) { //allow cross origin requests
        res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
        res.header("Access-Control-Allow-Origin", "http://localhost");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    /** Serving from the same express Server
    No cors required */
    app.use(express.static('../client'));
    //app.use(bodyParser.json());

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

    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    app.post('/upload', function(req,res) {
      var busboy = new Busboy({ headers: req.headers });
      busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
        console.log('Field [' + fieldname + ']: value: ' + inspect(val));
       console.log("--------->");
      });
      busboy.on('finish', function() {
        console.log('Done parsing form!');
        res.writeHead(303, { Connection: 'close', Location: '/' });
        res.end();
      });
      req.pipe(busboy);

        // console.log("New Test"  +  req['body']['file']);
        // upload(req,res,function(err){
        //     if(err){
        //          res.json({error_code:1,err_desc:err});
        //          return;
        //     }
        //      res.json({error_code:0,err_desc:null});
        // });
    });

    app.listen('3000', function(){
        console.log('running on 3000...');
    });
