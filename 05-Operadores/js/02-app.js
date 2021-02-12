const numero1 = 20;
const numero2 = 30;
const numero3 = 40;
const numero4 = 20;
const numero5 = '20';


//Revisar si dos numeros son iguales


console.log(numero1 == numero4);

console.log(numero1 == numero5);

//Se recomienda utilizar triple igual para que sea más estricto y compare de mejor forma
console.log(numero1 === numero5);

//type of sirve para ver que tipo de variable o constante es
console.log(typeof(numero1));
console.log(typeof(numero5));


//Diferente

const password1 = 'admin';
const password2 = 'admin';
const password3 = 'administrador';
//Nos imprime false ps las dos contraseñas son iguales
console.log(password1 != password2);
//Nos imprime true, ya que son diferentes
console.log(password1 != password3);