const mongoose = require('mongoose');
const vmSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  desciption: String,
  quantity: Number,
  purchased: Number,
  purchaseDate: [Date],
  change: Number
});

const Snack = mongoose.model('snack', vmSchema);

module.exports = Snack;
