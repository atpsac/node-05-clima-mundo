
const getLatLong = async ( dir ) => {

    const encondedUrl = encodeURI( dir );

    const axios = require('axios');

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondedUrl}`,
        headers: { 'x-rapidapi-key': 'dfa8b880bdmsh30abde805757279p1056e8jsn89666e9ed4f2' }
    });

    const resp = await instance.get();

        if ( resp.data.Results.length === 0 ) {
            throw new Error( `No hay resultados para ${ dir }` );
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
};

module.exports = {
    getLatLong
};

