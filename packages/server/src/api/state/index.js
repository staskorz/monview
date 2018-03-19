const poller = require('opsview-poller')

module.exports = (req, res) => {
	res.json({
		ok: true,
		sum: poller(1, 5),
	})
}
