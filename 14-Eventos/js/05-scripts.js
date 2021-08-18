window.addEventListener('scroll', verticalY);

function verticalY(){
    const premium = document.querySelector('.premium');
    // El método Element.getBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
    if(ubicacion.top < 692){
        console.log('Elemento ya esta visible');
    }else{
        console.log('aun falta, sigue dando scroll');
    }
}