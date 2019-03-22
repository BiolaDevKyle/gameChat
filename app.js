const express = require('express');

const app = express();

  app.get('/', function(req, res){
    res.send('<h1> Welcome to the greatest site ever </h1>');
  })

app.listen(3001, function(){
  console.log('listening on localhost:3001');
});
