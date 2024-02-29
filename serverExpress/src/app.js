const express = require("express")
const productRouter=require("./Routers/productsRouter")
const ProductManager=require('./ProductManager')

const PORT = 8080

const app = express()

const um = new ProductManager(); 

app.use(express.json()); 

app.use("/api/products", productRouter)

app.get("/", (req, res)=>{
    res.send("Server Básico con Exspres...!!!")
})

app.post("/api/products", (req, res)=>{
    const { title, description, price, thumbnail, code, stock, status, category } = req.body;


    if (!title || !description || !price || !thumbnail || !code || !stock || !status || !category) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

        um.addProduct(title, description, price, thumbnail, code, stock, status, category);

        res.status(201).json({ mensaje: "Producto agregado correctamente" });
})


app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`);
})



