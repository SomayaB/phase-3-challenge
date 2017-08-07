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


app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})
