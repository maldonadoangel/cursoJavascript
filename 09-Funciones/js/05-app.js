
function sumar(a, b){ //a y b son parametros de funcion
    console.log(a + b);
}

sumar(2, 3); //2 y 3 son argumentos
sumar(100, 100);


                 //parametro con los argumentos entre () y separado por comas ,
function saludar(nombre, apellido){ 
    //Declaracion de la funcion entre las llaves {}
    console.log(`Hola, que tal ${nombre}, tu apellido es: ${apellido}`);
}

//Llamada de la funcion pasando los argumentos y mandarlos al parametro de la funciòn
saludar('Angel', 'Morales');