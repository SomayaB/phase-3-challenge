var db = require('./database.js')
var format = require('./format.js')

var command = process.argv[2].toLowerCase()
var input = process.argv.splice(3).join(' ')

function run(command, input){
  if (command === 'product-list'){
    if(!input){
      console.log('You must enter the section you want to look for.')
    } else {
        db.productList(input)
        .then(function(result){
          console.log(`|------------------+------------------+`)
          console.log(`|   Product Name   |      Section     |`)
          console.log(`|------------------+------------------+`)
          format(result)
          process.exit()
        })
        .catch(function(error){
          console.log(error)
        })
      }
  } else if (command === 'shopper-orders'){
    if(!input){
      console.log('You must enter a shopper id.')
    } else {
      db.shopperOrders(input)
      .then(function(result){
        console.log(`|------------------+------------------+`)
        console.log(`|     order id     |     total cost   |`)
        console.log(`|------------------+------------------+`)
        format(result)
        process.exit()
      })
      .catch(function(error){
        console.log(error)
      })
    }
  } else if (command === 'real-shoppers'){
      db.realShoppers()
      .then(function(result){
        console.log(`|------------------+------------------+`)
        console.log(`|   shopper name   | number of orders |`)
        console.log(`|------------------+------------------+`)
        format(result)
        process.exit()
      })
      .catch(function(error){
        console.log(error)
      })
  } else {
    console.log("Not a valid command. Please use 'product-list', 'shopper-orders', or 'real-shoppers'.")
    process.exit()
  }
}

run(command, input)


// function format(result){
//   var currentLine = result.forEach(function(line){
//     var firstWord = String(Object.values(line)[0])
//     var secondWord = String(Object.values(line)[1])
//     var noOfSpacesToaddToFirstWord = 16-firstWord.length
//     var noOfSpacesToaddToSecondWord = 16-secondWord.length
//     console.log(`|  ${firstWord} ${Array(noOfSpacesToaddToFirstWord).join(" ")}|  ${secondWord} ${Array(noOfSpacesToaddToSecondWord).join(" ")}|`)
//   })
//   console.log(`|------------------+------------------+`)
// }
