const express = require('express')
const dotenv = require('dotenv')
const morgan = require("morgan")
const cors = require('cors')
const router = require('./src/routes/calculate')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
app.use(cors())

//routes

app.get('/', (req, res) => {
  res.send('Server is working')
})

app.use('/', router)


app.listen(port, () => {
  console.log(`Server listening at port ${port}`)
})

module.exports = app