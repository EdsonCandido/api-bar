import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

server.listen(PORT, () => console.log(`:: SERVER RUNNING IN ${PORT} ::`))