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
    let datePurchased = Date.now();
    let change = 0;
    let message = '';

    Snack.findById(itemId).then(function(item) {
      if (money >= item.price && item.quantity > 0) {
        item.quantity -= 1;
        item.purchased += 1;
        item.purchaseDate.push(datePurchased);
        item.paid = money;
        item.save();
        change = (money - item.price);
        message = 'Vending... Change due: ' + change;
        return res.json({status: "success", message: message, data: item});
      } else if (money < item.price && item.quantity > 0) {
        message = 'Please add more money';
        return res.json({status: "failed", message: message});
      } else if ( item.quantity === 0) {
        message = 'Item out of stock';
        return res.json({status: "failed": message: message});
      }
    });
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
    });
  },

  addItem: function(req, res) {
    let add = new Snack(req.body).save().then(function(item) {
      res.json({status: "success", data: item});
    });
  },

  updateItem: function(req, res) {
    let id = req.params.id;
    let quantity = req.body.quantity;
    let price = req.body.price;
    let description = req.body.description;

    Snack.findOneAndUpdate({_id: id}, {
      price: price,
      description: description,
      quantity: quantity
    }).then(res.json({message: 'Update Successful'}));
  }
};
