require('dotenv').config()

const webServer = require('./init/web-server')
const opsview = require('./init/opsview')
const injectIntoReq = require('./express-middleware/inject-into-req')
const api = require('./api')

webServer({
	setup: app => {
		app.use('/api', injectIntoReq({ opsview }), api)
	},

	ready: () => {
		// eslint-disable-next-line no-console
		console.log('HTTP Server listening')
	},
})
