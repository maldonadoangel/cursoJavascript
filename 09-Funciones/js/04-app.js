const numero1 = 20;
const numero2 = '20';


//La diferencia entre metodo y funcion tiene que ver con el contexto
//que son utilizados

console.log(parseInt(numero2)); //Esto es una funciòn

console.log(numero1.toString())  //Esto es un metodo


function sumar(){
    console.log(2+2);
}

sumar();