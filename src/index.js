require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression') 

const connectMongo = require('./mongo/mongoconnection');

connectMongo();

const Type = require('./service/typeService');
const Test = require('./service/testService');
const Question = require('./service/questionService');
const Answer = require('./service/answerService');

const TypeRepository = require('./repository/typeRepository');


const typeRepo = new TypeRepository();


const type = new Type(typeRepo);
const test = new Test();
const question = new Question();
const answers = new Answer();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());

type.initRoutes();
test.initRoutes();
question.initRouter();
answers.initRoute();
app.use('/type', type.getRoute());
app.use('/test', test.getRoute());
app.use('/question', question.getRouter());
app.use('/answers', answers.getRoute());


const port = process.env.port || 6500

app.listen(port)
console.log('http server listening on port ', port)