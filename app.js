const express = require('express');
const path = require('path');
const homepage = require('./application/controllers/homepage.js');
const userManagement = require('./application/controllers/userManagement.js');

const app = express();

app.set('views', path.join(__dirname, '/application/views'));
app.set('view engine', 'ejs')

  homepage(app);
  userManagement(app);

app.listen(3001, function(){
  console.log('listening on localhost:3001');
});
