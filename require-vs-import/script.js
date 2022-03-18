const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
//import dotenv from 'dotenv'
//import dotenvExpand from 'dotenv-expand'

const expanded = dotenvExpand.expand(dotenv.config())
console.log(expanded)
