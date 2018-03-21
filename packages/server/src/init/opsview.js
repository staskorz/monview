const opsviewConnectionCreator = require('opsview-poller')

const { OPSVIEW_USERNAME, OPSVIEW_PASSWORD, OPSVIEW_URL } = process.env

module.exports = opsviewConnectionCreator({
	username: OPSVIEW_USERNAME,
	password: OPSVIEW_PASSWORD,
	url: OPSVIEW_URL,
})
