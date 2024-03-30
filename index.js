
const express = require('express')
const app = express()

//middleware to parse json request body
app.use(express.json())

//import routes fo API and mount the API routes
const postRouter = require('./routes/post')
app.use("/api/v1",postRouter)

const likeRouter = require('./routes/like')
app.use('/api/v1',likeRouter)

const commentRouter = require('./routes/comment')
app.use('/api/v1',commentRouter)

//load config from env file
require('dotenv').config()
const PORT = process.env.PORT || 4000
//connect to database
const dbConnect = require('./configs/database')
dbConnect()
//start server
app.listen(PORT,() =>{
    console.log(`server started successfully at ${PORT}` )
})
//default route
app.get("/", (req, res) => {
    res.send(`<h1> Welcome to Blog App</h1>`);
  });