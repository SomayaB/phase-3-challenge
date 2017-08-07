var pgp = require('pg-promise')()
var connectionString = 'postgres://localhost:5432/grocery_store'
var db = pgp(connectionString)

function productList(section) {
  return db.any('SELECT name AS "Product Name", section AS "Section" FROM grocery_items WHERE section = $1', section)
}

function shopperOrders(shopperId) {
  return db.any(`SELECT orders.id AS "order id", SUM(grocery_items.price) AS "total cost"
  FROM order_details
  JOIN grocery_items
  ON order_details.product_id = grocery_items.id
  JOIN orders
  ON order_details.order_id = orders.id
  WHERE orders.shopper_id = $1
  GROUP BY orders.id
  `, shopperId)
}

function realShoppers(){
  return db.any(`SELECT shoppers.name AS "shopper name", COUNT(orders.id) AS "number of orders"
  FROM shoppers
  JOIN orders
  ON shoppers.id = orders.shopper_id
  GROUP BY shoppers.name
  HAVING COUNT(orders.shopper_id) > 0
  ORDER BY COUNT(orders.id) ASC
  `)
}
