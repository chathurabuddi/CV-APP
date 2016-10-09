var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

var db = require('./db').db;

db.bind('cvData');

// cvpath:{$in:[req.body.id,"comma separated elemenet"]}

//$or: [{
//    cvpath: req.body.id
//}, {
//    cvpath: "lol"
//}]

var cvArray = [];
router.post('/', function(req, res) {
    cvArray = []; //remove elemet in the list for every request
    console.log(req.body.id);
    db.collection('cvData').find({

    }, function(err, result) {
        result.each(function(err, band) {
            if (band !== null) {
                cvArray.push(band);
                //console.log(band.name);
            } else {
                // end of the loop when null encounter
                console.log(cvArray);
                return res.json(cvArray);
            }
        });
    });
});

module.exports = router;
