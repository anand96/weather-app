const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
/*
const url = 'http://api.weatherstack.com/current?access_key=aee53cee1d0fc67b3d713c2196709625&query=37.8267,-122.4233&units=f'

request({ url: url, json: true}, (error, response) => {
    //const data = JSON.parse(response.body)
    //console.log(data.current)
    if(error)
    {
        console.log('Unable to connect to weather service')
    }else if(response.body.error){
        console.log('Unable to find location')
    }
    else{
        console.log(response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature +' degree out. There is a '+ response.body.current.feelslike +' change precipication')
    }
})

//Geocoding
//Address -> Lat/Long -> Weather


const  geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGF6eTIxIiwiYSI6ImNrdHZtaGYzNTJiZnYydnBud25jdWJvdXYifQ.sfFAGs8cimGOWip3e-NGCg&limit=1'

request({url: geocodeURL, json:true}, (error, response) => {
    if(error){
        console.log('Unable to connect to Location Services')
    }else if(response.body.features.length === 0)
    {
        console.log('Unable to find the Geolocation')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude =response.body.features[0].center[0]
        console.log(latitude+","+longitude)
    }
})
*/

//callback function



//callback chaining

const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
}
else{

    geocode(address, (error, { latitude, longitude, location } = {}) => {

        if(error)
        {
            return console.log(error)
        }
        forecast(latitude,  longitude, (error, forecastData) => {
            if(error)
            {
                return console.log(error)
            }
            //console.log('Error', error)
            console.log(location)
            console.log(forecastData)
        })
        
    })
}



 