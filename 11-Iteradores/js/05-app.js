//foreach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

pendientes.forEach((pendiente, index)=> {
    console.log(`${index} : ${pendiente}`);
    

})

const productos = [
    {nombre: 'Televisor de 10 pulgadas', precio: 1000},
    {nombre: 'Televisor de 100 pulgadas', precio: 10000},
    {nombre: 'Bocina', precio: 800},
    {nombre: 'Celular Iphone', precio: 10000}
    
    
    
]

const nuevoArreglo = productos.forEach((producto, index)=>{
    console.log(`${index}: ${producto.nombre}`);
})

console.log('SOy el map');
const nuevoArreglo2 = productos.map((producto, index)=>{
   
    console.log(`${index}: ${producto.nombre} precio: ${producto.precio}`);

})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);