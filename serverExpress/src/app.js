const express = require("express")
const {dirnameValue} = require('./utils')
const handlebars = require("express-handlebars")
const path = require("path")
const productRouter=require("./Routers/productsRouter")
const cartRouter=require("./Routers/cartRouter")
const viewsRouter=require("./Routers/viewsRouter")
const {Server} =require("socket.io")

const PORT = 8080

let io;
const app = express()

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))
app.use("/js", express.static(path.join(__dirname, "public/js")))

app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use("/api/products", (req, res, next)=>{
    req.io=io
    next()
}, productRouter)

app.use("/api/carts", cartRouter)

app.use ("/", viewsRouter)

const server =app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`);
})

io=new Server(server)



