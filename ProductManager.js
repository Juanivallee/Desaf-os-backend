// desafio 01
const fs = require('fs')
const { stringify } = require('querystring')

class ProductManager{


    constructor(){
        this.products=[]
        this.path = "./basededatosproductos.txt"
        fs.writeFileSync(this.path, JSON.stringify(this.products, null, "\t"))
    }


    addProduct(title, description, price, thumbnail, code, stock){

        let existe=this.products.find(product=>product.code===code)
        if(existe){
            console.log(`El producto con code ${code} ya existe, ingrese otro code para identificar el producto`);
            return
        }


        let parametros = {title, description, price, thumbnail, code, stock}
        if (Object.values(parametros).some(value => value === undefined || value == ""  || value == " ")) {
            console.log('Usted no ha completado todos los campos');
            return;
        }


        let id=1 
        if(this.products.length>0){
            id=this.products[this.products.length-1].id +1
        } 


        let newProduct={id, title, description, price, thumbnail, code, stock}
        this.products.push(newProduct)

        fs.writeFileSync(this.path, JSON.stringify(this.products, null, "\t"))
    }



    getProducts(){
        return JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}))
    }



    getProductById(id){
        const traerArreglo = JSON.parse(fs.readFileSync(this.path,{encoding:"utf-8"}))
        
        const productFind = traerArreglo.find(productFind => productFind.id === id)

        if (!productFind) {
            console.log(`Not found. No existen productos con el numero de id ${id}.`)
            return
        }

        return productFind
    }



    updateProduct(id, campoParaActualizar, nuevaInfo){
        let traerArreglo = JSON.parse(fs.readFileSync(this.path,{encoding:"utf-8"}))

        let productFindIndex = traerArreglo.findIndex(productFind => productFind.id === id)

        if(productFindIndex === -1) {
            console.log(`Not found. No existen productos con el numero de id ${id}.`);
            return;
        }

        let productToUpdate = traerArreglo[productFindIndex]
        productToUpdate[campoParaActualizar] = nuevaInfo

        traerArreglo[productFindIndex] = productToUpdate

        fs.writeFileSync(this.path, JSON.stringify(traerArreglo, null, "\t"))
        console.log(`Producto con ID ${id} actualizado correctamente`);
    }



    deleteProduct(id){
        let traerArreglo = JSON.parse(fs.readFileSync(this.path,{encoding:"utf-8"}))
        
        let productFindIndex = traerArreglo.findIndex(productFind => productFind.id === id)

        if (productFindIndex === -1) {
            console.log(`Not found. No existen productos con el numero de id ${id}.`);
            return;
        }

        traerArreglo.splice(productFindIndex, 1)


        fs.writeFileSync(this.path, JSON.stringify(traerArreglo, null, "\t"));
        console.log(`Producto con ID ${id} eliminado correctamente`);
    }

}

let um = new ProductManager()

// um.addProduct("Fideo", "Paquete de fideos 300gr Maroleo", "$1200", "htpps://fideosmaroleo.com", 1566324851, 35)

// um.addProduct("Arroz", "Paquete de arroz 250gr luchetti", "$3000", "htpps://arrozluchetti250.com", 15674600589, 20)

// um.addProduct("Galletitas", "Paquete de galletitas 75gr oreo", "$1200", "htpps://oreopaquete.com", 52100541892, 22)

// um.addProduct("Leche", "caja de leche 2l", "$1000", "htpps://cajaleche.com", 42532824227427, 12)

// console.log(um.getProducts());

// console.log(um.getProductById(3));

// um.updateProduct(2, "price", "$1250" )

// um.deleteProduct(3)



