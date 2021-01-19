// src/routes/index.ts
import { Router } from 'express';
import fruitsRouter from './sales.routes';

const routes = Router();

routes.use('/fruits', fruitsRouter);

export default routes;
