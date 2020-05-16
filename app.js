const { crearArchivoTabla, listarTabla } = require('./Multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
switch(comando){
    case 'list':
        listarTabla(argv.base, argv.limite)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    break; 
    case 'create': 
        crearArchivoTabla(argv.base, argv.limite)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    break; 
    default: 
        console.log('El comando ingresado no es reconocido.');
}

