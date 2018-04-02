const express = require('express')

const { HTTP_PORT = 3000 } = process.env

const app = express()

module.exports = ({ setup, ready }) => {
	setup(app)

	app.listen(HTTP_PORT, ready)
}
