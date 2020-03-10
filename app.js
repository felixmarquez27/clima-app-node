let argv = require('./config/yargs').argv;
let lugar = require('./lugar/lugar');
let clima = require('./clima/clima');
let lat = '';
let lng = '';

const datos = lugar.getLugarLatLng(argv.d)
    .then(datos => {
        lat = datos.lat;
        lng = datos.lng;
        clima.getClima(lat, lng)
            .then(console.log)
            .catch(console.log);
    });