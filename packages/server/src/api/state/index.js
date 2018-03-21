module.exports = (req, res) => {
	req.opsview()

	res.json({
		ok: true,
	})
}
