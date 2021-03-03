const autenticado = false;


//Mala practica
/* 
if(autenticado === true){
    console.log('Si puedes ver Netflix');
}else{
    console.log('No puedes ver Netflix');
} */



//Buena practica

/* 
if(autenticado){
    console.log('Si puedes ver Netflix');
}else{
    console.log('No puedes ver Netflix');
} */

//Operador terniario

console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');