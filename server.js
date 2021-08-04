require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

//app init
const app = express()


//middleware
app.use(express.json)

//database connection
const DB_url = process.env.DB_url
mongoose.connect(DB_url , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('database connected.'))
.catch((err) => console.log(err))


//route
// const newRouter = require('./route/router')
// app.use('/api/routers', newRouter)


//server running
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running at localhost:${PORT}`))