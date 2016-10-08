var mongo = require('mongoskin');
var configDB = require('../config/db.js');

// exports.db = mongo.db("mongodb://localhost:27017/mycvapp", {
//     native_parser: true
// });

exports.db = mongo.db(configDB.url, {
    native_parser: true
});
