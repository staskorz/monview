describe('startup', () => {
	beforeEach(() => {
		jest.resetModules()

		jest.mock('dotenv', () => ({
			config: jest.fn(),
		}))

		jest.mock('./init/web-server')
		jest.mock('./init/opsview')
		//jest.mock('./api')
		jest.mock('./express-middleware/inject-into-req')
	})

	it('calls dotenv.config()', () => {
		require('./index')

		expect(require('dotenv').config).toHaveBeenCalled()
	})

	it('starts web server', () => {
		require('./index')

		expect(require('./init/web-server')).toHaveBeenCalled()
	})
})
