const express = require('express')
const Joi =  require('joi')
const validate = require('../middlewere/validation')


const schemaTest = Joi.object().keys({
    uuid: Joi.string(),
    title : Joi.string().required(),
    question: [Joi.object().keys({
        questionId: Joi.number(),
        typeId: Joi.number(),
        body: Joi.string(),
        answers: [Joi.string()]
    })],
    criteria : Joi.object().pattern(Joi.string(), [Joi.number()])
})

class Test{
    constructor(){
        this.route = express.Router()
    }

    initRoutes(){
        this.route.post("/", async (req, res)=>{
            if(validate(req, res, schemaTest)){
                const test = req.body
            }
        });

        this.route.get("/all", async (req, res)=>{
            // get test name and id
        });


        this.route.get('/:id', async (req, res)=>{

        });

        this.route.delete('/', async (req, res)=>{
            
        })

    }

    getRoute(){
        return this.route
    }
}

module.exports = Test