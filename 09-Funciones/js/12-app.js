const meses = [
    {nombre: 'Televisor de 10 pulgadas', precio: 1000},
    {nombre: 'Televisor de 100 pulgadas', precio: 10000},
    {nombre: 'Bocina', precio: 800}
    
    
    
    ];
    
    console.log(meses[1]);
    console.log(meses.length);
    console.table(meses);
    

    meses.forEach( producto =>  console.log(`${producto.nombre} precio: ${producto.precio}`))

    const nuevoArreglo = meses.map( producto => `${producto.nombre} precio: ${producto.precio}`)
    console.log(nuevoArreglo);