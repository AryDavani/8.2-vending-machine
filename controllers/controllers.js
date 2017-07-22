const Snack = require('../models/data');

module.exports = {

  getItems: function(req, res) {
    Snack.find({}).then(function(list) {
      res.json({status: "success", data: list});
    });
  },

  purchaseItem: function(req, res) {
    let itemId = req.params.itemId;
    let money = req.body.money;



    res.json();
  },

  listOfPurchases: function(req, res) {
    Snack.find({purchased: {$gt: 0}}).then(function(list) {
      let items = [];

      list.forEach(function(each) {
        items.push({name: each.name, date: each.purchaseDate});
      });
      res.json({status: "success", data: items});
    });
  },

  getMoney: function(req, res) {
    Snack.find({}).then(function(money) {
      let total = 0;
      money.forEach(function(each) {
        total += each.paid;
      });
      res.json({status: "success", data: total});
    })
  },

  addItem: function(req, res) {

  },

  updateItem: function(req, res) {

  }
};
