const Data = require('../models/data');

module.exports = {

  getItems: function(req, res) {
    Data.find().then(function(list) {
      res.json(list);
    });
  },

  purchaseItem: function(req, res) {
    let itemId = req.params.itemId;
    let money = req.body.money;
    if (Data.data[itemId].cost < money && Data.data[itemId].quantity > 0) {
      Data.change = (money - Data.data[itemId].cost);
      Data.data[itemId].quantity = (Data.data[itemId].quantity - 1);
    };
    console.log(Data);

    res.json(Data.change);
  },

  listOfPurchases: function(req, res) {

  },

  getMoney: function(req, res) {

  },

  addItem: function(req, res) {

  },

  updateItem: function(req, res) {

  }
};
