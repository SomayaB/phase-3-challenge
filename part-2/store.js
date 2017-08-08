var db = require('./database.js')
const { formatProductList, formatShopperOrders, formatRealShoppers } = require('./format.js')


function run(command, input){
  if (command === 'product-list'){
    if(!input){
      console.log('You must enter a valid grocery section.')
    } else {
        db.productList(input)
        .then(function(result){
          formatProductList(result)
          process.exit()
        })
        .catch(function(error){
          console.log(error)
          process.exit()
        })
      }
  } else if (command === 'shopper-orders'){
      if(!input || isNaN(Number(input))){
        console.log('You must enter a valid shopper id.')
      } else {
        db.shopperOrders(input)
        .then(function(result){
          formatShopperOrders(result)
          process.exit()
        })
        .catch(function(error){
          console.log(error)
          process.exit()
        })
      }
  } else if (command === 'real-shoppers'){
      db.realShoppers()
      .then(function(result){
        formatRealShoppers(result)
        process.exit()
      })
      .catch(function(error){
        console.log(error)
        process.exit()
      })
  } else {
    console.log("Not a valid command. Please use 'product-list', 'shopper-orders', or 'real-shoppers'.")
    process.exit()
  }
}

try{
  var command = process.argv[2].toLowerCase()
  var input = process.argv.splice(3).join(' ')
  run(command, input)
} catch(error){
  if(error instanceof TypeError){
    console.log(`You must add a command after the file name. Please use of of these:
  | command        | description                                               | example usage                            |
  |----------------|-----------------------------------------------------------|------------------------------------------|
  | product-list   | lists all products which belong to the given section      | ./store product-list <product-section>   |
  | shopper-orders | lists the orders for a given shopper                      | ./store shopper-orders <shopper-id>      |
  | real-shoppers  | lists the names of all shoppers who have at least 1 order | ./store real-shoppers                    |
    `)
  }
}
