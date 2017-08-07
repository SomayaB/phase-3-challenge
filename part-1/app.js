var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api/days/:day', function(request, response, next){
  var daysOfWeek = {
    monday: 1,
    tuesday:2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }
  var day = request.params.day.toLowerCase()

  response.set('Content-Type', 'application/text')

  if(!daysOfWeek.hasOwnProperty(day)) {
    response.status(400)
    response.send(`'${day}' is not a valid day!`)
  } else {
    response.status(200)
    response.send(String(daysOfWeek[day]))
  }
})

app.post('/api/array/concat', function(request, response, next){
  response.set('Content-Type', 'application/json')
  var bodyObj = request.body
  var arrays = []
  for(item in bodyObj){
    try {
      arrays.push(JSON.parse(bodyObj[item]))
    } catch(error) {
        if(error instanceof SyntaxError) {
          response.status(400)
          return response.json({"error": "Input data should be of type Array."})
        }
      }
  }
  var result = [].concat.apply([], arrays)
  response.json({"result": result})
})


app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
