const path = require('path')
const express = require('express')

const app = express();

// Set routes
const routes = require('express-auto-routes')(app);
routes(path.join(__dirname, 'controllers'));

// Set view engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// Map content root
app.get('/', function(req, res) {
  res.redirect(303, '/home');
})

// 404
app.use(function(req, res, next) {
  var err = new Error();
  err.status = 404;
  err.msg = 'Not found';
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  res.render('error', { title: err.status + ' : ' + err.msg });
});

// Server
app.listen(3000, function() {
	console.log('Server started on port 3000...')
});
