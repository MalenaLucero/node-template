const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    controller.getItems()
        .then((list) => {
            response.success(req, res, 200, list)
        })
        .catch(e => {
            response.error(req, res, 400, 'Unexpected Error', e)
        })
})

module.exports = router;