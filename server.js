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