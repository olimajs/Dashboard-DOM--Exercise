/* 
- mouseover 
- mouseout
- click

el addeventlistener es como un escuchador al evento, x eso se agrega para el momento q sucede ese evento accione.
*/

//paso 1: seleccionar elementos a los que aplicaremos eventos.

let one = document.querySelector('#one');

let two = document.querySelector('#two');

let three = document.querySelector('#three');

// paso 2 : agregar escuchador: listener
//cuando ese evento suceda se ejecuta la funcion
one.addEventListener('mouseover', function() {
    one.textContent = 'el mouse esta sobre mi'
}); 

one.addEventListener('mouseout', function() {
    one.textContent = 'el mouse NO esta sobre mi'
}); 


two.addEventListener('click', function() {
    two.textContent = 'Ya me dieron click'
}); 


three.addEventListener('dblclick', function() {
    three.textContent = 'Ya me dieron double click'
}); 