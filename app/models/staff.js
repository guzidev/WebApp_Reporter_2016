// Staff model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StaffSchema = new Schema({
  name: 		{ type: String, required: true },
  login: 		{ type: String, required: true },
  password: 	{ type: String, required: true },
  email: 		{ type: String, required: true },
  telephone: 	{ type: String, required: true },
  city: 		{ type: String, required: true }
}); 

mongoose.model('Staff', StaffSchema);

