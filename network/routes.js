const testComponent = require('../components/test-component/network')

const routes = function(server){
    server.use('/items', testComponent)
}

module.exports = routes;