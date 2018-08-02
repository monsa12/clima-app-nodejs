const axios = require('axios');

const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=949128bf8764e4300b41d6327ef0b26c `)


    let main = resp.data.main;
    //console.log(main.temp);
    //console.log(resp);
    return main.temp;
}




module.exports = {
    getClima
}