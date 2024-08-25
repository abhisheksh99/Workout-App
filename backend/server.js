const workoutRoutes = require('./routes/workout.routes.js')
const userRoutes=  require ("./routes/user.routes.js")
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

//express app
const app = express();

// middleware
app.use(express.json())
app.use((req,res,next)=> {

    console.log("Request path",req.path)
    console.log("Request method",req.method)
    next();
    
})

//routes
app.use('/api/workouts',workoutRoutes)

app.use('/api/user',userRoutes)

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to db")
    //listen for requests
    app.listen(process.env.PORT,()=>{
    console.log("app listening at port",process.env.PORT);
    
})
})
.catch((e)=>{
    console.log("ERROR:",e)
})





