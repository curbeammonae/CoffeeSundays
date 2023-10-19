const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const dash = require('./routes/dash')//-> routes folder, todos.js file
const path = require('path')


require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', homeRoutes)
app.use('/dash', dash)//localhost:3000/ -> go to routes folder this is the 'home.js';
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    