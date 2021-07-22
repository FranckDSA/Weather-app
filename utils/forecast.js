const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=894c9a81e2a2a2b5cf6634faf9e5c8f1&query=' + encodeURIComponent(latitude) + ',' +  encodeURIComponent(longitude) + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services !', undefined)
        } else if (body.error) {
            callback('Unable to find infos. Try again.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '\nIt is currently ' + body.current.temperature + ' degress out. it feels like ' + body.current.feelslike + ' degress.')
        }
    })
}

module.exports = forecast