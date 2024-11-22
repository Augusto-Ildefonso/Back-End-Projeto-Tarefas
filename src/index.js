import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routers/userRoute.js';
import taskRouter from "./routers/taskRouter.js";
import './db/connection.js'

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.use('/users', userRouter);
server.use('/tasks', taskRouter)

server.get('/', (req, res) => {
    console.log('Server running!');
    res.status(200).send({})
})

server.listen(3000, () => console.log('Server is running on port 3000'));