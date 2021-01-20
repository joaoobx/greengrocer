// src/routes/index.ts
import { Router } from 'express';
import fruitsRouter from './FruitsRouter';

const routes = Router();

routes.use('/fruits', fruitsRouter);

export default routes;
