const express = require('express')
const path = require('path')

const app = express()

const etecFolder = path.join(__dirname,"institucional","/")
app.use(express.static(etecFolder))

app.get("/",(req,res)=>{
    res.sendFile(etecFolder + "index.html")
})

app.get("/ppg",(req,res)=>{
    res.sendFile(etecFolder + "ppg.html")
})

app.get("/projeto-msdaa",(req,res)=>{
    res.sendFile(etecFolder + "projeto-msdaa.html")
})

app.get("/tecnico-integrado",(req,res)=>{
    res.sendFile(etecFolder + "etim.html")
})

app.get("/tecnico-modular",(req,res)=>{
    res.sendFile(etecFolder + "modular.html")
})

app.get("/como-estudar-na-etec",(req,res)=>{
    res.sendFile(etecFolder + "como-estudar-na-etec.html")
})

app.get("/tutoriais-estudantes",(req,res)=>{
    res.sendFile(etecFolder + "tutoriais-estudantes.html")
})

app.get("/processo-seletivo",(req,res)=>{
    res.sendFile(etecFolder + "processo-seletivo.html")
})

app.get("/vagas-remanescentes",(req,res)=>{
    res.sendFile(etecFolder + "vagas-remanescentes.html")
})

app.get("/contato",(req,res)=>{
    res.sendFile(etecFolder + "em-contrucao.html")
})

app.get("/tutoriais",(req,res)=>{
    res.sendFile(etecFolder + "tutoriais-estudantes.html")
})

app.listen(8080,'localhost',()=>{
    console.log('http://localhost:8080')
})