
var express = require('express')

const app = express()

app.use(express.static('dist'))

app.listen(8080, function () {
  console.log('Peatio-tech listening on port 8080!')
})
