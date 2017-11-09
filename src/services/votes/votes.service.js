// Initializes the `votes` service on path `/votes`
const createService = require('feathers-memory')
const hooks = require('./votes.hooks')
const filters = require('./votes.filters')

module.exports = function() {
	const app = this
	const paginate = app.get('paginate')

	const options = {
		name: 'votes',
		paginate,
	}

	// Initialize our service with any options it requires
	app.use('/votes', createService(options))

	// Get our initialized service so that we can register hooks and filters
	const service = app.service('votes')

	service.hooks(hooks)

	if (service.filter) {
		service.filter(filters)
	}
}
