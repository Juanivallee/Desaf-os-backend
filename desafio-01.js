// desafio 01

class ProductManager{


    constructor(){
        this.products=[]
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


        let newProduct={title, description, price, thumbnail, code, stock, id}
        this.products.push(newProduct)
    }



    getProducts(){
        return this.products
    }



    getProductById(id){
        let product=this.products.find(u=>u.id===id)

        if(!product){
            console.log(`Not found. No existen productos con el numero de id ${id}.`);
            return
        }

        return product
    }


}

let um = new ProductManager()

um.addProduct("Fideo", "Paquete de fideos 300gr Maroleo", "$1200", "htpps://fideosmaroleo.com", 1566324851, 35)

um.addProduct("Arroz", "Paquete de arroz 250gr luchetti", "$2500", "htpps://arrozluchetti250.com", 15674600589, 20)

um.addProduct("Galletitas", "Paquete de galletitos 75gr oreo", "$1200", "htpps://oreopaquete.com", 52100541892, 22)


console.log(um.getProducts());

// console.log(um.getProductById(2));