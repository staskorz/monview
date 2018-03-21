module.exports = obj => (req, res, next) => {
	Object.assign(req, obj)

	next()
}
