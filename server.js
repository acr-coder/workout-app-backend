require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutsRoutes')

// express app
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.json({msg:"hellooooo"})
})

// Routes
app.use('/api/workouts', workoutRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
    console.log('Listenning on port:',process.env.PORT);
    
})
    })
    .catch((error) => {
        console.log(error)
    })

