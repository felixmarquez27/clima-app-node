const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fffe2f3999549bd5655ccde093565bb3&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}