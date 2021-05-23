const dinero = 100;
const totalPagar = 300;
const tarjetaCredito = true;

if(dinero >= totalPagar){
    console.log('SI puedes pagar');

}else if(tarjetaCredito){
    console.log('Puedes pagar con tu tarjeta de credito debido a que esta disponible.');
}else{
    console.log('Fondos insuficientes');
}