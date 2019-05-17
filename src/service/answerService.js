const express = require('express');
const Joi = require('joi');
const  validate = require('../middlewere/validation')

const answerSchema = Joi.object().keys({
    name : Joi.string().required(),
    gender: Joi.string().valid('MALE', 'FEMALE').required(),
    age: Joi.number().max(120).required(),
    testId: Joi.number().required(),
    answers: Joi.object().pattern(Joi.number(), Joi.string()).required()
})

class Answer{
    constructor(){
        this.route = express.Router()
    }

    initRoute(){

        this.route.post('/', async (req, res)=>{

        });

        this.route

    };

    getRoute(){
        return this.route;
    };
}

module.exports = Answer