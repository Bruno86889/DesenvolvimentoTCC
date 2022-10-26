const express = require('express')
const path = require('path')

const app = express()

const etecFolder = path.join(__dirname,"institucional","/")


app.get('/tutorials',(req,res)=>{
    
})

app.listen(8080,'localhost',()=>{
    console.log('http://localhost:8080')
})