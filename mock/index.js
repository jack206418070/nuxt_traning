const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3001

//router require
const testRouter = require('./router/test')


//router use
app.use(cors())
app.use('/api', testRouter)


app.get('/', (req, res) => {
  res.send({
    title: 'success',
    message: 'hello world!'
  })
})


app.listen(port, () => {
  console.log(`mock server listening at http://localhost:${port}`)
})

