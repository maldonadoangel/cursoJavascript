

console.log(meses[1]);
console.log(meses.length);
console.table(meses);


for(let i = 0; i < meses.length; i++){
    console.log(`${meses[i].nombre} - precio: ${meses[i].precio}`);
}

meses.forEach(function(producto){
    console.log(`${producto.nombre} precio: ${producto.precio}`);   

})