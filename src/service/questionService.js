const express = require('express')
const Joi = require('joi')
const validate = require('../middlewere/validation')

const questionSchema = Joi.object().keys({
    questionId: Joi.number(),
    typeId: Joi.number(),
    body: Joi.string(),
    answers: [Joi.string()]
})

class Question{
    constructor(){
        this.route = express.Router();
    }

    initRouter(){
        this.route.post("/", async (req, res)=>{
            if(validate(req, res, questionSchema)){
                
            }
        })

        this.route.get("/all", async (req, res)=>{
            
        })
    }

    getRouter(){
        return this.route
    }

}

module.exports = Question