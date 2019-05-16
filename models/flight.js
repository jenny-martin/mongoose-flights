var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// var user = new user({
//    lastActiveAt: '',
// });
// console.log(user.lastActiveAt(instanceOf, Date));

var flightSchema = new Schema({
   airline: { 
      type: String,
      enum: ['American', 'Southwest', 'United'],
},

   flightNo: { 
      type: Number, 
      min: '10',
      max: '9999'
   
   },

   departs: {
      type: Date, 
      default: function() {
         return new Date().getFullYear() + 1;
      } 
   }
});
   // console.log(flightSchema.getFullYear(newDate, Date))


module.exports = mongoose.model('Flight', flightSchema);