const express = require("express")

const ProductManager=require('./ProductManager.js')

const PORT = 3000

const app = express()

const um=new ProductManager()

app.get("/", (req, res)=>{
    res.send("Server Básico con Exspres...!!!")
})


app.get("/products", (req, res)=>{
    let productos = um.getProducts()

    res.json(productos)
})



app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`);
})



