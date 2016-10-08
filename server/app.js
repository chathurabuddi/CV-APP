var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');


require('./config/passport')(passport);


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser());
app.use(express.static('../client/dist'));
app.use(bodyParser.json());
// Use res.sendfile, as it streams instead of reading the file into memory.
app.use(function(req, res) {
    res.sendfile(path.resolve('../client/dist/index.html'));
});

//aplication end points
app.use('/upload', require('./controllers/cvupload.controller'));
app.use('/companylist',require('./controllers/companylist.controller'));


// passport js related
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
require('./controllers/userauth.controller')(app, passport);



app.listen('3000', function(){
    console.log('running on 3000...');
});
