var db = require('./database.js')

var command = process.argv[2].toLowerCase()
var input = process.argv.splice(3).join(' ')

function run(command, input){
  if (command === 'product-list'){
    if(!input){
      console.log('You must enter the section you want to look for.')
    } else {
        db.productList(input)
        .then(function(result){
          console.log(result)
          process.exit()
        })
      }
  } else if (command === 'shopper-orders'){
    if(!input){
      console.log('You must enter a shopper id.')
    } else {
      db.shopperOrders(input)
      .then(function(result){
        console.log(result)
        process.exit()
      })
    }
  } else if (command === 'real-shoppers'){
      db.realShoppers()
      .then(function(result){
        console.log(result)
        process.exit()
      })
  } else {
    console.log("Not a valid command. Please use 'product-list', 'shopper-orders', or 'real-shoppers'.")
    process.exit()
  }
}

run(command, input)
