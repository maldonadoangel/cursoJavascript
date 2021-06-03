const carrito = [
    {nombre: 'PS4 SLIM', precio: 4000, disponible: true},
    {nombre: 'Laptop Gamer Legion', precio: 10000, disponible: false},
    {nombre: 'Celular Xiami', precio: 2800, disponible: true},
    {nombre: 'TV Plasma 52 Pulgadas', precio: 4500, disponible: false}
];


//nos mostrara true o false dependiendo si todo se cumple en nuestra comparacion
const resultado = carrito.every(producto => producto.precio > 1000);

console.log(resultado);