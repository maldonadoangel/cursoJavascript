const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//De forma manual
meses.forEach((mes, index)=>{
  if(mes === 'Abril'){
      console.log(`Encontrado en el indice ${index}`);
  }

});


//Encontrar el indice de abril
const indice = meses.findIndex((mes)=>{
  return mes === 'Abril';
});

console.log(indice);

//Encontrar un Indice de un arreglo de objetos, si existieran mas valores igual a 100 solo extrae el primero que encuentre
//para eso existe filter
const indice2 = carrito.findIndex(producto =>{
    return producto.precio === 100;

});

console.log(indice2);