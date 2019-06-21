// Dependencies
var express = require('express')
var mongojs = require('mongojs')
// Require axios and htmlParser. This makes the scraping possible
var axios = require('axios')
var htmlParser = require('fast-html-parser')

// Initialize Express
var app = express()

// Database configuration
var databaseUrl = 'scraper'
var collections = ['scrapedData']

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections)
db.on('error', function (error) {
    console.log('Database Error:', error)
})

// Main route (simple Hello World Message)
app.get('/', function (req, res) {
    res.send('Hello world')
})

// Retrieve data from the db
app.get('/all', function (req, res) {
    // Find all results from the scrapedData collection in the db
    db.scrapedData.find({}, function (error, found) {
        // Throw any errors to the console
        if (error) {
            console.log(error)
        }
        // If there are no errors, send the data to the browser as json
        else {
            res.json(found)
        }
    })
})

// Listen on port 3000
app.listen(3030, function () {
    console.log('App running on port 3000!')
})