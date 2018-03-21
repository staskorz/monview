const injectIntoReq = require('./inject-into-req')

describe('injects properties into req', () => {
	const oldProp = 'oldProp'
	const newProp = 'newProp'

	let req
	let inject

	beforeEach(() => {
		req = { oldProp }
		inject = injectIntoReq({ newProp })
	})

	it('injects property into req', done => {
		const next = () => {
			expect(req.newProp).toEqual(newProp)
			done()
		}

		inject(req, {}, next)
	})

	it('keeps original props', done => {
		const next = () => {
			expect(req.oldProp).toEqual(oldProp)
			done()
		}

		inject(req, {}, next)
	})
})
