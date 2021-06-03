const carrito = [
    {nombre: 'PS4 SLIM', precio: 400, disponible: true},
    {nombre: 'Laptop Gamer Legion', precio: 10000, disponible: false},
    {nombre: 'Celular Xiami', precio: 2800, disponible: true},
    {nombre: 'TV Plasma 52 Pulgadas', precio: 4500, disponible: false}
];


let resultado;

/* resultado = carrito.filter(producto => producto.precio > 400); */
/* resultado = carrito.filter(producto => producto.precio < 600); */
/* Como filtrar todos menos el articulo que no deseamos */
resultado = carrito.filter(producto => producto.nombre !== 'Celular Xiami');
/* Para traer solo el articulo que quiero */
resultado = carrito.filter(producto => producto.nombre === 'Celular Xiami');


console.log(resultado);


