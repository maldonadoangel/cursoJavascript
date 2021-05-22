
//Añadir funciones al objeto
const nombrePlaylist = 'Maldita Hamburguesa';

const reproductor = {
    cancion: ' ',
    reproducir: id =>console.log (`Reproduciendo cancion con el ${id}...`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando cancion con el id ${id}`),
    crearPlaylist: nombre=> console.log(`Se esta creando la Playlist con el nombre: ${nombre}`),
    reproducirPlaylist: nombre=> console.log(`Reproduciendo la playlist con el nombre de: ${nombre}`),
    //Set sirve para meter valores 
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
},
//get sirve para obtener un valor
    get obtenerCancion(){
        console.log(`La cancion que se añadio recientemente es: ${this.cancion}`);
    }
    
}

reproductor.nuevaCancion = 'Enter Sadman';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(nombrePlaylist);
reproductor.reproducirPlaylist(nombrePlaylist);