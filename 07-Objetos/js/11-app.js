//La palabra this se refiere a los valores que se encuentran en el objeto
//Como podemos ver en la function al colocar this para referirnos al objeto si lo encuentra
//COmo podemos ver el rango de this solo es con el objeto y dentro del objeto

const producto = {
    nombre: 'Cuaderno',
    precio: 5.00,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    },
    detalles: {
        color: 'rojo',
        tamanio: '1 m'
    }
    
}

const producto2 = {
    nombre: 'Tablet',
    precio: 5000.00,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `);
    },
    detalles: {
        color: 'rojo',
        tamanio: '1 m'
    }
    
}

producto.mostrarInfo();


const {mostrarInfo, detalles: {color}} = producto;

console.log(mostrarInfo);
console.log(color);

producto2.mostrarInfo();