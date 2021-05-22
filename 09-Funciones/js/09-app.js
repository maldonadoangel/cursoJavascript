
//Añadir funciones al objeto
const nombrePlaylist = 'Maldita Hamburguesa';

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el ${id}...`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    borrar: function(id){
        console.log(`Borrando cancion con el id ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Se esta creando la Playlist con el nombre: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist con el nombre de: ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(nombrePlaylist);
reproductor.reproducirPlaylist(nombrePlaylist);