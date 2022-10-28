const express = require('express')
const path = require('path')

const app = express()

const etecFolder = path.join(__dirname,"dist","/")

app.use(express.static(etecFolder))

app.get('/',(req,res)=>{
    res.sendFile(path.join(etecFolder,"index.html"))    
})

app.listen(8080,'localhost',()=>{
    console.log('http://localhost:8080')
})