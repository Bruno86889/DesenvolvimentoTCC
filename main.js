const express = require('express')
const path = require('path')
const cors = require("cors")

const app = express()

const etecFolder = path.join(__dirname,"dist","/")

app.use(express.static(etecFolder))
app.use(cors("*"))

app.get('/',(req,res)=>{
    res.sendFile(path.join(etecFolder,"index.html"))    
})

app.listen(process.env.PORT | 8080)