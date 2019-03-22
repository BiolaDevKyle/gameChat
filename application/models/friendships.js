const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId;
var Schema = mongoose.Schema;


FriendshipSchema = new Schema({
  id: ObjectId,
  person1: String,
  person2: String,
  since: Date
});
