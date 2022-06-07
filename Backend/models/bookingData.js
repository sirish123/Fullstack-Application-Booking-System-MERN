const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  uniqueid: { type: String,   required: true },
  diagnosis: { type: String, required:true},
  paymentamount:{type:String, required:true},
  date:{type:String, required:true},
  time:{type:String, required:true}
});
module.exports = mongoose.model('bookings',bookingSchema);