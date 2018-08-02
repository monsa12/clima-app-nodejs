const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCgnipiVmNTDDlbGuk4GTRTQIkQ49vCCiA `)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la direccion:  ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    //arreglarlo mejor el json
    // console.log(JSON.stringify(resp.data, undefined, 2));
    //imprimir status de la peticion
    //console.log('Status: ', resp.status);

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}