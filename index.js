const express = require("express")

const app = express()
const PORT = process.env.PORT || 8000


app.get("/"  , (req ,res)=>{
    res.json({message : "Hey from   AWS server Khush to bahot hoge tum !"})
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})