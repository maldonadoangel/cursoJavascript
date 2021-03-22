const producto ={
    nombre: 'Monitor de 20 pulgadas',
    precio: 3000,
    disponible: true

}

/* Destructuring, lo que hace es sacar de la estructura*/
const {nombre} = producto;

console.log(nombre);


/* Destructuring con arreglos */
const numeros = [10,20,30,40,50];

const [primero, ...tercero] = numeros;

    console.log(primero);

console.log(tercero);