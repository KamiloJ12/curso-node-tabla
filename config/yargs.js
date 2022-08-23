const { argv } = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla de multiplicar en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'La cantidad hasta que se va a multiplicar la base'
                })
                .check( ( argv, options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un número';
                    }
                    return true;
                } );

module.exports = argv;