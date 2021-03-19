/* Object literal */
const producto = {
    nombre: 'Pc gamer GTX 1050',
    precio: 4000,
    disponible: true
}


    /* Object construcion */
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor de 20 pulgadas', 3000);
console.log(producto2);

const producto3 = new Producto('Celular', 5000);
console.log(producto3);

