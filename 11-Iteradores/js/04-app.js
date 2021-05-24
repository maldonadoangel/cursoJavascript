//while


let i = 1;

while(i <= 100){//condicion
     if(i%3 === 0 && i%5 === 0){
         console.log(`${i} Fizzbuzz`);
     }else if(i% 3 === 0){
         console.log(`${i} fizz`);
     }else if(i%5 === 0){
         console.log(`${i} buzz`);
     }

    i++; //incremento
} 

