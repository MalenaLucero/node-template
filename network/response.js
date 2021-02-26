exports.success = function(req, res, status, items) {
    res.status(status || 200).send({
        items: items,
    })
}

exports.error = function(req, res, status, message, details){
    console.error('[response error] ' + details);

    res.status(status || 400).send({
        error: message,
    })
}