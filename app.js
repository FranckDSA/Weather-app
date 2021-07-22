const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address.');
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log('Error :', error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
            return console.log('Error :', error)
            }
            console.log(chalk.bold.green.inverse(location));
            console.log(forecastData)
        })
    })
}