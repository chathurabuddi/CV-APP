var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');
var multer = require('multer');
var util = require('util'),
    inspect = require('util').inspect;
var Busboy = require('busboy');

var config = require('config.json');

var db = require('./db').db;
db.bind('cvData');


//multers disk storage settings
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        console.log(file.fieldname);
        var datetimestamp = Date.now();
        newname = file.originalname.split('.')[0] + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null, newname);
        console.log("creation" + newname);
    }
});

var upload = multer({
    storage: storage
}).single('file');


router.get('/lol', function(req, res) {
    //return res.render('upload');
    return res.json("chamath");
});

router.post('/', function(req, res) {
    newname = "errpr_pdf.pdf";
    newRecord = {};
    var busboy = new Busboy({
            headers: req.headers
        }),
        createCV = function(newRecord) {
            console.log("---------->>>>>>>>>>---------" + newRecord.cvpath);
            db.cvData.insert(newRecord, function(err, doc) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Complete" + doc);
                }
            });
        };

    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
        newRecord[fieldname] = inspect(val).replace(/'/g, "");
        console.log('Field [' + fieldname + ']: value: ' + inspect(val));
    });
    busboy.on('finish', function() {
        console.log('Done parsing form!');
        //newRecord.cvpath = newname; // add cv name to the database
        //console.log(newRecord);
        // after parsing finished save it to database
    });

    req.pipe(busboy);

    upload(req, res, function(err) {
        if (err) {
            return res.json({
                error_code: 1,
                err_desc: err
            });
            // return; // if error occor exit form here
        }
        newRecord.cvpath = newname; //insert cv name to the data base
        createCV(newRecord);
        return res.json({
            error_code: 0,
            err_desc: null
        });
    });
});






module.exports = router;
