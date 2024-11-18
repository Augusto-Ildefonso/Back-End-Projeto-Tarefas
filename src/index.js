import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routers/userRoute.js';
import './db/connection.js'

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.use('/users', userRouter);

server.listen(3000, () => console.log('Server is running on port 3000'));