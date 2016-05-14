var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/routes.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//For Middleware we have to use 'USE' keyword
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret:"secret",resave:true,saveUninitialized:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.get('/',function(req,res){
  //res.write('Hello Sameer Learning Node js');
  //res.end();
//});

app.get('/',routes.loginPageHandler);
app.get('/toLanding',routes.landingPageHandler);
app.post('/toCity',routes.cityPageHandler);

//var port = process.env.npm_package_config_port || 3000;
//For Heroku deployment we have to use process.env.PORT
var port = process.env.PORT || 3000;

app.listen(port,function(){
  console.log('Server is Listening on port:  ' + port);
});

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
  //var err = new Error('Not Found');
  //err.status = 404;
  //next(err);
//});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
  //app.use(function(err, req, res, next) {
    //res.status(err.status || 500);
    //res.render('error', {
      //message: err.message,
      //error: err
    //});
  //});
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
  //res.status(err.status || 500);
  //res.render('error', {
    //message: err.message,
    //error: {}
  //});
//});


module.exports = app;
