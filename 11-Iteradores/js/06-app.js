//Recorrer un arreglo con foreach

const electronicos = ['Telefono', 'Tv', 'Bocinas', 'Audifonos', 'PC'];
const carros = [
     {nombre: 'Toyota Yaris', precio: 40000},
     {nombre: 'Honda Civic', precio: 55000},
     {nombre: 'Toyota Hilux', precio: 140000, oferta: true}
     
]

const animales = {
    tipo: 'Perro',
    raza: 'Golden',
    precio: 4500
}

//La forma de recorrer un arreglo
electronicos.forEach((electronico)=>{
    console.log(`${electronico}`);

})

//COmo ver que posicion tienen en el arreglo

electronicos.forEach((electronico, index)=>{
    console.log(`${index}: ${electronico}`);

})


//Recorrer una funcion con el foreach

function recorridoArreglo(electronico, index){
    console.log(`${electronico} se encuentra en el indice ${index}`);
}

electronicos.forEach(recorridoArreglo);


//for of SIRVE PARA INTERACTUAR MAS SOBRE ARREGLOS

for(let electronico of electronicos){
    console.log('---------------------')
     console.log(electronico);
}

for(let carro of carros){
    if(carro.oferta){
        console.log('!!!OFERTA!!!!!!!')
        console.log(`${carro.nombre} se encuentra en oferta por el valor de: ${carro.precio} `);
    }else{
        console.log(`${carro.nombre} y su precio normal de: ${carro.precio}`);
    }
}


//FOR IN se utiliza para objetos
for(let propiedad in animales){
    console.log(`${animales[propiedad]}`);
}