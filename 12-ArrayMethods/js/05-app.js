const carrito = [
    {nombre: 'PS4 SLIM', precio: 400, disponible: true},
    {nombre: 'Laptop Gamer Legion', precio: 10000, disponible: false},
    {nombre: 'Celular Xiami', precio: 2800, disponible: true},
    {nombre: 'TV Plasma 52 Pulgadas', precio: 4500, disponible: false}
];


//con un for each

let resultado = "";

carrito.forEach((producto, index) =>{
    if(producto.nombre === "PS4 SLIM"){
        resultado = carrito[index]
    }

});

console.log(resultado);


//.find

const resultado2 = carrito.find(producto => producto.nombre === 'PS4 SLIM');
console.log(resultado2);

