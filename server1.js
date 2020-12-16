const express = require('express')
const app = express()
const works = true
app.get('/api', (req, res, next) => {

  if (works) {
    res.setHeader('Access-Control-Allow-Origin', '*') // or just leave this out all together
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5050')
  }
  next()
}, (req, res) => {
  res.status(200).send('ok from server1')
})

app.use(express.static('static1'))

app.listen(5050)