const express = require("express")
const app = express()

// Necessary Package Imports 
const cookieParser = require('cookie-parser')
const path = require('path')

// Routes Imports

const ownersRouter = require('./routes/ownersRoute')
const usersRouter = require('./routes/usersRoute') 
const productsRouter = require('./routes/productsRoute') 

// DB Imports
const db = require('./config/mongoose-connection')



// Middleware for app 
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname ,"public")))
app.set('view engine',"ejs")



app.use('/owners' , ownersRouter)
app.use('/users' , usersRouter)
app.use('/products' , productsRouter)




app.listen(3000 , () => {
    console.log("App is Running on 3000 Port ........")
})