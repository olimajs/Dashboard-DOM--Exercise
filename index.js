const body = document.querySelector('body')
const tbodyProducts = document.querySelector('#tbodyProducts')

/*El evento onload de Javascript se activa cuando se termina de cargar la página. Cuando necesitamos hacer cosas en el momento en el que la página haya terminado de cargar, podemos asociar un manejador de evento onload en la etiqueta <body*/
body.onload = () => {

    const products = getProducts()
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
        //Meter tr dentro de tbody
        tbodyProducts.appendChild(trProduct)
    })



}