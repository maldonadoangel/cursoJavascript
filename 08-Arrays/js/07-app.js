//Agregar valores al arreglo sin conocer su tamaño o valores

const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Bocina',
    precio: 200
}
const producto4 = {
    nombre: 'Radio',
    precio: 200
}
/* Se agrega al final */
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
/* Se agrega al inicio */
carrito.unshift(producto3);


console.table(carrito);


/* Eliminar ultimo elemento del arreglo */
carrito.pop();
console.table(carrito); 

/* ELiminar el primer elemento del arreglo */
carrito.shift();
console.table(carrito);


/* ELiminar cualquier elemento */
carrito.splice(1, 1);
console.table(carrito);