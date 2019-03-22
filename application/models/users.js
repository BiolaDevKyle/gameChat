var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: ObjectId,
  name: String,
  username: String,
  email: String,
  joinDate: Date
});

var User = mongoose.model('User', UserSchema);
