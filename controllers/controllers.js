const Snack = require('../models/data');

module.exports = {

  getItems: function(req, res) {
    Snack.find().then(function(list) {
      res.json(list);
    });
  },

  purchaseItem: function(req, res) {
    let itemId = req.params.itemId;
    let money = req.body.money;


    res.json(Snack.change);
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
