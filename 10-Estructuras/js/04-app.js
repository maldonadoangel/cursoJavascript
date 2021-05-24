

const opcion = 'Dinero';

switch(opcion){
    case 'Dinero':
        console.log('Pagaste con dinero.');
    break;

    case 'Cheque':
        console.log('Pagaste con cheque');
    break;

    case 'Tarjeta Debito':
        console.log('Pagaste con tarjeta de debito');
    break;

    default:
        console.log('No escogiste ninguna opcion');
    break;
}