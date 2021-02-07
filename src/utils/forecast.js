const request = require('request')
const getForecast = (latitude,longitude,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=e263ddcae55cee21bf5d87e0234fbb9e&query='+latitude+','+longitude+'&units=m'

    request({ url, json:true },(error,{body}={})=>{
        if(error){
            callback('Unable to connect to Weatherstack API!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }
        else{
            const forecast = body.current.weather_descriptions+'. Temperature is '+body.current.temperature+' degrees but feels like '+body.current.feelslike+ ' degrees.'
            callback(undefined,forecast)
        }
    })
}

module.exports = getForecast