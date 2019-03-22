module.exports = function(app){

  app.get('/', function(req, res){
    res.render('home');
  });

  app.get('/home/:id', function(req, res){

  });

}
