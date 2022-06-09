const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/products', (req, res) => {
  res.json({
    productData: [
      {
        name: '有機豆腐',
        unit: '200g/盒',
        price: 60,
        favor: true
      },
      {
        name: '有機豆腐2',
        unit: '200g/盒',
        price: 80,
        favor: false
      },
      {
        name: '有機豆腐3',
        unit: '200g/盒',
        price: 100,
        favor: true
      },
      {
        name: '有機豆腐4',
        unit: '200g/盒',
        price: 120,
        favor: false
      },
      {
        name: '有機豆腐5',
        unit: '200g/盒',
        price: 160,
        favor: true
      },
      {
        name: '有機豆腐6',
        unit: '200g/盒',
        price: 260,
        favor: false
      }
    ]
  })
})
module.exports = app