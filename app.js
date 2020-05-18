const lugar = require( './lugar/lugar' );
const clima = require( './clima/clima' );

const argv = require( 'yargs' ).options(
    {
        direccion: {
            alias: 'd',
            desc: 'Direccion de la cantidad para obtener el clima',
            demand: true
        }
    }
).argv;

// lugar.getLatLong( argv.direccion )
//     .then( console.log )
//     .catch( err => console.log( err ) );

// clima.getClima( 40.75000, -74.000000 )
//     .then( console.log )
//     .catch( (err) => console.log( err ) );

const getInfo = async ( direccion ) => {

    try {

        const ciudad = await lugar.getLatLong( direccion ); 
        const temp = await clima.getClima( ciudad.lat, ciudad.lng );
        return ( `El clima de ${ ciudad.direccion } es de ${ temp }` );

    } catch (e) {
        return ( `No se pudo obtener el clima de ${ ciudad.direccion }` );
    }
};

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
