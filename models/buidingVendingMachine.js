const Snack = require('./data');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27107/vendingdb');

let snack1 = new Snack({
  name: "lays",
  price: 75,
  desciption: "chips",
  quantity: 12
});

let snack2 = new Snack({
  name: "snickers",
  price: 100,
  desciption: "candy bar",
  quantity: 8
});

let snack3 = new Snack({
  name: "orbit",
  price: 50,
  desciption: "gum",
  quantity: 15
});

let snack4 = new Snack({
  name: "doritos",
  price: 125,
  desciption: "chips",
  quantity: 17
});

snack1.save();
snack2.save();
snack3.save();
snack4.save();
