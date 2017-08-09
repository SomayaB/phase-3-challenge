function formatProductList(result){
  console.log(`|------------------+------------------+`)
  console.log(`|   Product Name   |      Section     |`)
  console.log(`|------------------+------------------+`)
  format(result)
}
function formatShopperOrders(result){
  console.log(`|------------------+------------------+`)
  console.log(`|     order id     |     total cost   |`)
  console.log(`|------------------+------------------+`)
  format(result)
}
function formatRealShoppers(result){
  console.log(`|------------------+------------------+`)
  console.log(`|   shopper name   | number of orders |`)
  console.log(`|------------------+------------------+`)
  format(result)
}

function format(result){
  var currentLine = result.forEach(function(line){
    var firstWord = String(Object.values(line)[0])
    var secondWord = String(Object.values(line)[1])
    var noOfSpacesToaddToFirstWord = 16-firstWord.length
    var noOfSpacesToaddToSecondWord = 16-secondWord.length
    console.log(`|  ${firstWord} ${Array(noOfSpacesToaddToFirstWord).join(" ")}|  ${secondWord} ${Array(noOfSpacesToaddToSecondWord).join(" ")}|`)
  })
  console.log(`|------------------+------------------+`)
}

module.exports = {
  formatProductList,
  formatShopperOrders,
  formatRealShoppers
}
