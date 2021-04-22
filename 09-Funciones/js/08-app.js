function sumar(a, b){
    return a+b;
}


const resultado1 = sumar(10,10);

alert(resultado1);


//Ejemplo màs avanzado 
let total = 0;


function agregarCarrito(precio){

    return total += precio;

}

function calcularImpuesto(total){
    return total * 1.15;

}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

let totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es: ${totalPagar}`);

console.log(total); 