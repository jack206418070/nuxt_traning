const express = require('express')
const app = express()

app.get('/test', (req, res) => {
  res.json({
    title: 'GinJack',
    message: 'hello world'
  })
})

module.exports = app