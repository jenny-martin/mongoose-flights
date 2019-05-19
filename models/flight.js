var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
   airline: {
      type: String,
      required: true,
      enum: ['American', 'Southwest', 'United']
   },
   flightNo: {
      type: Number,
      min: '10',
      max: '9999'
   },
   departs: {
      type: Date,
      default: function () {
         return new Date().getFullYear() + 1;
   }, 
      timestamps: true
   },
});

var destinationSchema = new Schema({
   airport: {
         type: String, 
         required: true,
         enum: ['AUS', 'DAL', 'LAX', 'SEA']
   },
   arrival: {
      type: Date, 
      default: function () {
         return new Date().getFullYear() + 1;
   }, 
      timestamps: true
   }
});



module.exports = mongoose.model('Flight', flightSchema);