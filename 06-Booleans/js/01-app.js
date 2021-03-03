const bolean1 = true;
const bolean2 = false;
const bolean3 = "true";

console.log(typeof bolean3);
console.log(typeof bolean2);

//Como podemos observar en consola no son iguales.
console.log(bolean1 == bolean3);

//Este bolean es de tipo objeto
const bolean4 = new Boolean(true);
console.log(typeof bolean4);