describe('opsview', () => {
	beforeEach(() => {
		jest.resetModules()

		jest.mock('opsview-poller', () => jest.fn(() => jest.fn()))

		Object.assign(process.env, {
			OPSVIEW_USERNAME: 'user1',
			OPSVIEW_PASSWORD: 'pass1',
			OPSVIEW_URL: 'url1',
		})
	})

	it('uses connection info from process.env', () => {
		require('./opsview')

		expect(require('opsview-poller')).toBeCalledWith({
			username: 'user1',
			password: 'pass1',
			url: 'url1',
		})
	})

	it('creates opsview connection', () => {
		const opsview = require('./opsview')

		expect(opsview).toBeDefined()
	})
})
