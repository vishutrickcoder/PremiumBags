const express = require("express")
const router = express.Router()

router.get('/' , (req , res) => {
    res.send("Hello Bhai Log")
})

module.exports = router