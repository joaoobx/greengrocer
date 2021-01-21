// src/routes/index.ts
import { Router } from 'express';
import fruitsRouter from './FruitsRouter';

const routes = Router();

routes.use('/buy', fruitsRouter);
routes.use('/sell', fruitsRouter);

export default routes;
