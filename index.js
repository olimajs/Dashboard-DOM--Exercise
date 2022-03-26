const body = document.querySelector('body')
const tbodyProducts = document.querySelector('#tbodyProducts')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
const inProduct = document.querySelector('#inProduct')
const inStock = document.querySelector('#inStock')
const inPrice = document.querySelector('#inPrice')
const inStatus = document.querySelector('#inStatus')

/*El evento onload de Javascript se activa cuando se termina de cargar la página. Cuando necesitamos hacer cosas en el momento en el que la página haya terminado de cargar, podemos asociar un manejador de evento onload en la etiqueta <body*/
body.onload = () => {
    
    const products = getProducts()
    fillTable(products)
    
}
//esta funcion nos crea la table con los productos
function fillTable(products) {
    let trs = []
    
    products.forEach((p, i) => {
        const tr = createRow(p, i)
    //agregar fila de producto a trs
    trs.push(tr)
    })
    tbodyProducts.append(...trs) //Al anteponer los tres puntos que representan al spread operator transformamos la variable numeros (acordarrme del ejemplo que vi de un array con números y necesitaba conseguir el mayor) en una lista de argumentos
    //meter trs al tbody
}
/*cuando actualice utilizare esa funcion para limpiar la tabla*/
function clearTable(){
    tbodyProducts.innerHTML = ''

}

function createRow(p, i) {
        //Icono de Borrar
        const iDelete = document.createElement('i')
        iDelete.className = 'fas fa-trash'
        const tdDelete  = document.createElement('td')
        tdDelete.appendChild(iDelete)
        iDelete.addEventListener('click', () => {
        const isConfirm = confirm('Are u sure u want to deleted this...?')
        if(isConfirm){
            //IF YES 
            deleteProduct(i)
            clearTable()
            fillTable(getProducts())
        }
    })
        //Icono de Actualizar
        const iUpdate = document.createElement('i')
        iUpdate.className = 'fas fa-pen'
        iUpdate.addEventListener('click',() => {
            inProduct.value = p.name
            inStock.value = p.stock
            inPrice.value  = p.price
            inStatus.value = p.status
            btnAddUpdate.textContent = 'UPDATE'  /*esto me cambia el content del btn al apretar el lapicito*/
             //borramos el add y remove listener xq con el add se acumula los click en cambio con onclick no   
            btnAddUpdate.onclick  = (e) => handerUpdateAddClick(e,i)
        })
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
        return trProduct 
        //tbodyProducts.appendChild(trProduct) //ESTO YA NO SIRVE XQ A LA LARGA SE VUELVE LENTO

}


btnAddUpdate.onclick = handerAddClick

function handerAddClick(e) {
    const valueInProduct = inProduct.value
    const valueInStock = parseInt(inStock.value)
    const valueInPrice = parseFloat(inPrice.value)
    const valueInStatus = parseInt(inStatus.value)
    //me tvalueIaigo el valor de lo que va a estar adentro de cada input(produc,price,stock,status,etc)
    const i =  getProducts().length
    const newProduct = addProduct(valueInProduct, valueInStock, valueInPrice,valueInStatus)
     //y se añade al array como especifique en el file products
    const row = createRow(newProduct, i)
    tbodyProducts.appendChild(row)
    alert("Product Created")
e.preventDefault()
}

function  handerUpdateAddClick(e, i){

    const valueInProduct = inProduct.value
    const valueInStock = parseInt(inStock.value)
    const valueInPrice = parseFloat(inPrice.value)
    const valueInStatus = parseInt(inStatus.value)

    updateProduct(i, valueInProduct, valueInStock, valueInPrice, valueInStatus )
    /*cuando actualice utilizare esa funcion para limpiar la tabla*/
    clearTable()
    const products = getProducts()
    fillTable(products)
    //limpiamos los campos al realizar los cambios
    inProduct.value = ''
    inStock.value = ''
    inPrice.value = ''
    inStatus.value = ''
    btnAddUpdate.textContent = 'ADD+'
    alert("Product Updated")

e.preventDefault()
}