const express = require("express")
const productRouter=require("./Routers/productsRouter")
const cartRouter=require("./Routers/cartRouter")

const PORT = 8080

const app = express()

app.use(express.json()); 


app.use("/api/products", productRouter)

app.use("/api/carts", cartRouter)

app.get("/", (req, res)=>{
    res.send("Server Básico con Exspress...!!!")
})

app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`);
})



