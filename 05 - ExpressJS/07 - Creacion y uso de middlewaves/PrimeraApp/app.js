var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs/promises');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//importando las rutas de productos
const productsRouter = require('./routes/products');
const { send } = require('process');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//middlewares
app.use((req,res,next)=>{
  console.log(new Date());
  req.currentDay = new Date();
  next();
})

app.use((req,res,next)=>{
  const randonNum = Math.random();
  if(randonNum > 0.6){
    res.send('no puedes acceder')
  }else{
    next();
  }
})

app.use(async (req, res, next)=>{
  await fs.appendFile('./main.log',`Metodo de la peticion: ${req.method} y URL: ${req.url}\n`);
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
//usando el archivo de rutas de productos
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
