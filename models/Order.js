const mongoose = require('mongoose')//helps us talk to our database


//this provides a required & consistent structure for our data
//like Aa template for what goes into our database
const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 drink: {
    type: String,
    required: true,
  },
milk: {
	type: String, 
	required: true,
},
allergies: {
	type:String,
	required: false,
},
	
  completed: {
    type: Boolean,
    required: false,
  },
})



module.exports = mongoose.model('Order', OrderSchema)//allows us to do this talking