exports.get = function(req, res, next) {
  res.render('home', { title: 'ToDo - Home'})
};
