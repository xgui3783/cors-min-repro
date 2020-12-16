const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/api', (req, res) => {
  res.redirect('http://localhost:5050/api')
  // res.status(200).send('ok from server2')
})

app.use(express.static('static2'))

app.listen(5051)