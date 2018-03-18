const { Router } = require('express')

const state = require('./state')

const router = new Router()

router.use('/state', state)

module.exports = router
