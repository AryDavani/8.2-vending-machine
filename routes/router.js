const Controller = require('../controllers/controllers');

module.exports = function(app) {

  app.get('/api/customer/items', Controller.getItems);

  app.post('/api/customer/items/:itemId/purchases', Controller.purchaseItem);

  app.get('/api/vendor/purchases', Controller.listOfPurchases);

  app.get('/api/vendor/money', Controller.getMoney);

  app.post('/api/vendor/items', Controller.addItem);

  app.patch('/api/vendor/items/:itemId', Controller.updateItem);

};
