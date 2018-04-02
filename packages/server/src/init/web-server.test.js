describe('web server', () => {
	beforeEach(() => {
		jest.resetModules()

		jest.mock('express', () =>
			jest.fn(() => ({
				use: jest.fn(),
				listen: (port, ready) => {
					ready()
				},
			})),
		)

		Object.assign(process.env, { HTTP_PORT: 123 })
	})

	it('creates express server object', () => {
		require('./web-server')

		expect(require('express')).toHaveBeenCalled()
	})

	it('calls setup() callback with express app as argument', () => {
		const webServer = require('./web-server')

		const setup = jest.fn()

		webServer({
			setup,
			ready: () => {},
		})

		expect(setup).toHaveBeenCalled()
	})

	it('calls ready() callback', () => {
		const webServer = require('./web-server')

		const ready = jest.fn()

		webServer({
			setup: () => {},
			ready,
		})

		expect(ready).toHaveBeenCalled()
	})
})
