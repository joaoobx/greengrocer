import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import './database';
import 'express-async-errors';
import AppError from './errors/AppError';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.get('/', async (req, res) => {
    return res.json('hello world');
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response
            .status(err.statusCode)
            .json({ status: 'error', message: err.message });
    }

    console.error(err);

    return response
        .status(500)
        .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3332, () => {
    // eslint-disable-next-line no-console
    console.log(`Servidor aberto na porta: http://localhost:${port}`);
});
