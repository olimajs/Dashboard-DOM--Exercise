const body = document.querySelector('body')
const tbodyProducts = document.querySelector('#tbodyProducts')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
/*El evento onload de Javascript se activa cuando se termina de cargar la página. Cuando necesitamos hacer cosas en el momento en el que la página haya terminado de cargar, podemos asociar un manejador de evento onload en la etiqueta <body*/
body.onload = () => {

    const products = getProducts()
    fillTable(products)

//esta funcion nos crea la table con los productos
function fillTable(products) {
    let trs = []
    
    products.forEach((p,i) => {
        //Icono de Borrar
        const iDelete = document.createElement('i')
        iDelete.className = 'fas fa-trash'
        const tdDelete  = document.createElement('td')
        tdDelete.appendChild(iDelete)
        //Icono de Actualizar
        const iUpdate = document.createElement('i')
        iUpdate.className = 'fas fa-pen'
        const tdUpdate  = document.createElement('td')
        tdUpdate.appendChild(iUpdate)
        //Columna nombre (del producto)
        const tdProduct = document.createElement('td')
        tdProduct.textContent = p.name
        //Columna de existencias
        const tdStock   = document.createElement('td')
        tdStock.textContent = p.stock
        //Columna Precio
        const tdPrice   = document.createElement('td')
        tdPrice.textContent = p.price
        //Columna Status
        const tdStatus = document.createElement('td')
        tdStatus.textContent = p.status//verificar producto disponible
    
        //Meter tds dentro de tr
        const trProduct = document.createElement('tr')
        trProduct.append(   //append solo puedo meter muchos nodos, con child solo 1 nodo hijo
        tdDelete,
        tdUpdate,
        tdProduct,
        tdStock,
        tdPrice,
        tdStatus
        )
        //Guardar tr
        trs.push(trProduct)//agregar un elemento al array de productos se utilizaba push

        //tbodyProducts.appendChild(trProduct) //ESTO YA NO SIRVE XQ A LA LARGA SE VUELVE LENTO
    })
    //meter trs al tbody
    tbodyProducts.append(...trs) //Al anteponer los tres puntos que representan al spread operator transformamos la variable numeros (acordarrme del ejemplo que vi de un array con números y necesitaba conseguir el mayor) en una lista de argumentos
}}

btnAddUpdate.addEventListener('click', handerAddClick)

function handerAddClick(e) {
    const inProduct = document.querySelector('#inProduct')
    const inStock = document.querySelector('#inStock')
    const inPrice = document.querySelector('#inPrice')
    const inStatus = document.querySelector('#inStatus')
    //me traigo el valor de lo que va a estar adentro de cada input(produc,price,stock,status,etc)
    const valueInProduct = inProduct.value
    const valueInStock = inProduct.value
    const valueInPrice = inProduct.value
    const valueInStatus = inStatus.value

    console.log(valueInPrice, valueInProduct);
         e.preventDefault()
}
