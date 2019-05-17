const express = require('express')
const Joi = require('joi')
const uuidValide = require('uuid-validate')
const uuidv1 = require('uuid/v1')
const validate = require('../middlewere/validation')

const schemaType = Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().required(),
    significance: Joi.object().pattern(Joi.string(), Joi.number()).required()
})


class Type {
    constructor(repo) {
        this.repo = repo;
        this.route = express.Router();
    }

    initRoutes() {
        // this.route.get('/:id', async (req, res) => {

        //     console.log("all work")
        //     res.send("OK")
        // });

        this.route.get('/all', async (req, res) => {
            // get type by name and id
            const types = await this.repo.getAll()
            res.send(types)
        })

        this.route.post('/', async (req, res) => {
            if (validate(req, res, schemaType)) {
                console.log(req.body)
                const bd = await this.repo.save(req.body);
                console.log('DB work and return -> ', bd);
                // const ff = uuidv1()

                // console.log(uuidValide(12))
                // console.log("random uuid -> ", ff)
                res.send(bd)
            }
        })

        this.route.delete('/', async (req, res) => {

        })

    }

    getRoute() {
        return this.route;
    }


}

module.exports = Type