const express = require('express');
const homepage = require('./application/homepage.js');
const userManagement = require('./application/userManagement.js');

const app = express();

  homepage(app);
  userManagement(app);

app.listen(3001, function(){
  console.log('listening on localhost:3001');
});
