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

function getProducts(){
    return products
}