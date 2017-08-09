var chai = require('chai')
var expect = chai.expect
var db = require('./database/database.js')

describe('productList(section)', function() {
	it('should list all products from a section', function(done) {
    db.productList('meat').then(function(result){
      expect(result).to.eql([
         { 'Product Name': 'Bacon', Section: 'meat' },
         { 'Product Name': 'Fish', Section: 'meat' },
         { 'Product Name': 'Ground Beef', Section: 'meat' },
         { 'Product Name': 'Ham', Section: 'meat' },
         { 'Product Name': 'Salami', Section: 'meat' }
      ])
      done()
    }).catch(function(error){
       return done(error)
    })
  })
})

describe('shopperOrders(shopperId)', function() {
	it('should list all orders for a given shopper id, return the order id and the total cost of the order', function(done) {
    db.shopperOrders('3').then(function(result){
      expect(result).to.eql([
         { 'order id': 5, 'total cost': '18.63' }
        ])
      done()
    }).catch(function(error){
      return done(error)
    })
  })
})

describe('realShoppers()', function() {
	it('should list all the shoppers that have at least 1 order, and also display the number of orders for them', function(done) {
    db.realShoppers().then(function(result){
      expect(result).to.eql([
        { 'shopper name': 'Sophie', 'number of orders': '1' },
        { 'shopper name': 'Charlie', 'number of orders': '1' },
        { 'shopper name': 'Tim', 'number of orders': '1' },
        { 'shopper name': 'Mary', 'number of orders': '2' }
       ])
      done()
    }).catch(function(error){
      return done(error)
    })
  })
})
