const Router = require("express").Router

const router = Router()

const ProductManager=require('../ProductManager')

const um=new ProductManager()

router.get("/", (req, res)=>{
    let productos = um.getProducts()

    let {limit} = req.query
    
    let resultado = productos
    if(limit && limit>0){
        resultado = resultado.slice(0, limit)
    }

    res.json(resultado)
})

router.get("/:pid", (req, res) => {
    let productos = um.getProducts()

    let {pid} = req.params

    const productFind = productos.find(product => product.id == pid)

    if (!productFind) {
        console.log(`No se encontró ningún producto con el id ${pid}.`);
        res.status(404).json({ error: `No se encontró ningún producto con el id ${pid}.` });
        return;
    }

    res.json(productFind)
})


module.exports=router