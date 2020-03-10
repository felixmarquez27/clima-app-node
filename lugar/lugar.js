const axios = require('axios');


const getLugarLatLng = async(dir) => {
    let encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '4e5b20a969msh7ba53dd58c62a7dp115599jsn91c87aabaaed' }
    });

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultados para ${dir}`);

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }


}


module.exports = {
    getLugarLatLng
}