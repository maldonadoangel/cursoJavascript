const numero1 = 20;
const numero2 = 30;

let resultado;

//Suma
resultado = numero1 + numero2;
console.log(resultado);


//Resta
if (numero1 > numero2) {
    resultado = numero2 - numero1;
}else{
    resultado = numero1 - numero2;
}
console.log(resultado);




//multiplicacion
resultado = numero1 * numero2;
console.log(resultado);

//division
if (numero2 == 0) {
    resutaldo = numero2 / numero1;
    console.log(`EL resultado de la division es: ${resultado}`);
}else{ 
    resultado = numero1 / numero2;
    console.log(`EL resultado de la division es: ${resultado}`);
}


//modulo
resutaldo = numero1 % numero2;
console.log(resultado);