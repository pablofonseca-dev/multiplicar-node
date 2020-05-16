const opt = {
    base: {
        demand: true,
        alias: 'b'
    }, 
    limite: {
        demand: true,
        alias: 'l', 
        default: 10, 
    }
}
const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar.', opt)
    .command('create', 'Genera un archivo con la tabla de multiplicar.', opt)
    .help() 
    .argv;


module.exports = {
    argv 
};