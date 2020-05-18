const axios = require('axios');

const getClima = async (lat, long) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&appid=d4273797ba8483bac3465c5c18e78495&units=metric`);

    return resp.data.main.temp;

};

module.exports = {
    getClima
}