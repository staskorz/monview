require('dotenv').config()

const express = require('express')
const opsviewConnectionCreator = require('opsview-poller')

const injectIntoReq = require('./express-middleware/inject-into-req')
const api = require('./api')

const {
	HTTP_PORT = 3000,
	OPSVIEW_USERNAME,
	OPSVIEW_PASSWORD,
	OPSVIEW_URL,
} = process.env

const opsview = opsviewConnectionCreator({
	username: OPSVIEW_USERNAME,
	password: OPSVIEW_PASSWORD,
	url: OPSVIEW_URL,
})

const app = express()

app.use('/api', injectIntoReq({ opsview }), api)

app.listen(HTTP_PORT, () => {
	// eslint-disable-next-line no-console
	console.log('HTTP Server listening on port', HTTP_PORT)
})
