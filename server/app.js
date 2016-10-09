var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');
var session      = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');

require('./config/passport')(passport);

<<<<<<< HEAD



=======
>>>>>>> 1bc3b56da90811052bbfae20e141c9eefc40b499
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser());
<<<<<<< HEAD
app.use(express.static('../client/dist'));
app.use(bodyParser.json());

app.use(express.static('public'));
=======
app.use(bodyParser.json());

// read cookies (needed for auth)
app.use(cookieParser());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// passport js related
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());
>>>>>>> 1bc3b56da90811052bbfae20e141c9eefc40b499

app.use('/upload', require('./controllers/cvupload.controller'));
app.use('/companylist', require('./controllers/companylist.controller'));
//get cv list for givin company
app.use('/getCvList', require('./controllers/companycvlist.controller'));
// get the givin cv and update the givin cv
app.use('/manageCv', require('./controllers/manageCV.controller'));

app.get('/register2', function(req, res) {
    res.send({ message: req.flash('signupMessage')});
});


<<<<<<< HEAD
// passport js related
app.use(cookieParser());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

require('./controllers/userauth.controller')(app, passport);


// read cookies (needed for auth)
app.use(bodyParser());
=======
require('./controllers/userauth.controller')(app, passport);

>>>>>>> 1bc3b56da90811052bbfae20e141c9eefc40b499
app.use(express.static('../client/dist'));
// Use res.sendfile, as it streams instead of reading the file into memory.
app.use(function(req, res) {
    res.sendfile(path.resolve('../client/dist/index.html'));
});

<<<<<<< HEAD
// app.use(session({
//   secret: 'appsecret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: true,
//     maxAge: new Date(Date.now() + 3600000)
//   }
// }));




=======
>>>>>>> 1bc3b56da90811052bbfae20e141c9eefc40b499
app.listen('3000', function(){
    console.log('running on 3000...');
});
