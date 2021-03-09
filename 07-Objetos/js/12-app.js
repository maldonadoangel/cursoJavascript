const producto = {
    nombre: 'Pc gamer GTX 1050',
    precio: 4000,
    disponible: true,
    mostrarInfo: function () {
        console.log(`EL producto: ${this.nombre} con su precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();