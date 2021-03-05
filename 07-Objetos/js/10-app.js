const producto = {
    nombre: 'Consola PS4 version Slim',
    precio: 4000,
    disponible: true,
    lanzamiento: {
        anio: 2014,
        modelo: 'asefsd123'
    }
}

const medidas = {
    peso: '1 KG',
    medida: '1 Metro'
}

console.log(producto);


producto.color = 'Blanco';
console.log(producto);

const {nombre, lanzamiento, lanzamiento: {anio}} = producto;

console.log(nombre);
console.log(lanzamiento);
console.log(anio);


//Unir dos objetos
const union = Object.assign(producto, medidas);
console.log(union);


//Spread o rest operator

const resultado2 = {...producto, ...medidas}

console.log(resultado2);