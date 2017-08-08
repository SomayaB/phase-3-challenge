

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

module.exports = format
