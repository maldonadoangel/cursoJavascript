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

let resultado;
/* spread operator */
resultado = [...carrito, producto, producto3];
resultado = [producto2, ...carrito];


console.table(resultado);

