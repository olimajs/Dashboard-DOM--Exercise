//const products = []   /*nuestro arreglo es la cajita dde colocare mis productos*/
//eje: fruits
//fruits.forEach((f, i) => { for each te recorria el array y mostraba cada elemento y su indice
//console.log(f,i)
//})
const products = [
    new Product('Gloves',20,5,1),
    new Product('Tibials',20,15,1),
    new Product('Headgear',50,10,3),
    new Product('Bandages',200,3,1),
    new Product('Mouth Piece',0,6,0),
    new Product('Groin Protection',20,5,1),
]

//funcion que nos devuelva los productos:
//los traigo y devuelvo tipo pull y push en git
function getProducts(){
    return products
}

//añado el product al array cuando doy click pero pasa el addproduct al file de index para finalizar
function addProduct(name, stock, price, status){
    const newProduct =  new Product(name, stock, price, status)
    products.push(newProduct)
    return newProduct
}

function updateProduct(i, newName, newStock, newPrice, newStatus ) {
    product[i].name = newName
    products[i].stock = newStock
    products[i].price = newPrice
    products[i].status = newStatus
}

/*al dar el icono delete, se usa esta fucncion con el splice, donde me indica desde que elemento(1) quiero borrar*/
function deleteProduct(i) {
    products.splice(i,1)   
}