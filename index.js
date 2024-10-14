const express = require("express")

const app = express()



app.get("/"  , (req ,res)=>{
    res.json({message : "Hey from   AWS server Khush to bahot hoge tum !"})
})

app.listen(process.env.PORT ||  8000 , ()=>{
    console.log(`Server listening `)
})