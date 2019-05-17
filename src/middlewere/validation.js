const Joi = require('joi')

function joiValidate(req, res, shema) {
    const result = Joi.validate(req.body, shema, {abortEarly: false})
    let fnRes = true
    if(result.error != null){
        const message = result.error.details
            .map(d => d.message)
            .reduce((res, cur)=> res + ';' + cur)
            res.status(400).send(message)
        fnRes = false
    }

    return fnRes
}

module.exports = joiValidate