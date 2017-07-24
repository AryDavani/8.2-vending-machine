const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const Snack = require('../models/data');

describe("basic endpoint api tests", () => {

  beforeEach((done) => {
    Snack.insertMany([
      {name: 'snackTest1', price: 75, desciption: "chips", quantity: 1, purchased: 1, paid: 100},
      {name: 'snackTest2', price: 100, desciption: "candy", quantity: 1, purchased: 2, paid: 200},
      {name: 'snackTest3', price: 150, desciption: "chips", quantity: 1, purchased: 3}
    ]).then(done());
  });

  afterEach((done) => {
    Snack.deleteMany({}).then(() => done());
  });

  it('returns all items as json from /api/customer/items', (done) => {
    request(app)
    .get('/api/customer/items')
    .expect(200)
    .expect(res => {
      expect(res.body.data[0].name).to.equal('snackTest1');
      expect(res.body.data[1].name).to.equal('snackTest2');
      expect(res.body.data[2].name).to.equal('snackTest3');
      expect(res.body.data.length).to.equal(3);
    }).end(done);
  });

  it('purchases an item from /api/customer/items/:itemId/purchases', (done) => {
    request(app)
    .post('/api/customer/items/:itemId/purchases')
    .send({name: 'snackTest4', price: 125, desciption: "candy", quantity: 1, purchased: 0})
    .expect(201)
    .expect(res => {
      Snack.count().then(count => {
        expect(count).to.equal(4);
      })
    })
  })
});


describe('sanity test', () => {
  it('should run test', () => {
    expect(328479283).to.not.equal(875739879);
  });
