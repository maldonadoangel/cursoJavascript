

const carrito = [
    {nombre: 'PS4 SLIM', precio: 4000, disponible: true},
    {nombre: 'Laptop Gamer Legion', precio: 10000, disponible: false},
    {nombre: 'Celular Xiami', precio: 2800, disponible: true},
    {nombre: 'TV Plasma 52 Pulgadas', precio: 4500, disponible: false}
]


carrito.forEach((producto, index)=>{

    console.log(`${index} Nombre: ${producto.nombre}, precio: ${producto.precio}`);

});