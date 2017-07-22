const mongoose = require('mongoose');

const vmSchema = new mongoose.Schema({
  name: String,
  price: Number,
  desciption: String,
  quantity: Number,
  purchased: {type: Number, Default: 0},
  purchaseDate: [Date],
  paid: Number
});

const Snack = mongoose.model('Snack', vmSchema);

module.exports = Snack;
