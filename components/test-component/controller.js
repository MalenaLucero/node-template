const store = require('./store')

function getItems(){
    return new Promise((resolve, reject) => {
        const list = store.list()
        resolve(list)
    })
}

module.exports = {
    getItems
}