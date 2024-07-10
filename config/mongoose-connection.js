const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/PremiumBag")  
.then(function(){
    console.log("DB is Connected now Enjoy .... 😉")
})
.catch(function(err){
    console.log(err)
})

module.exports = mongoose.connection;