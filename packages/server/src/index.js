require('dotenv').config()

const express = require('express')

const api = require('./api')

const { HTTP_PORT = 3000 } = process.env

const app = express()

app.use('/api', api)

app.listen(HTTP_PORT, () => {
	// eslint-disable-next-line no-console
	console.log('HTTP Server listening on port', HTTP_PORT)
})
