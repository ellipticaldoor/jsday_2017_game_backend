const votes = require('./votes/votes.service.js');
module.exports = function() {
    const app = this // eslint-disable-line no-unused-vars
    app.configure(votes);
}
