import { Router } from 'express';
import FruitService from '../services/FruitService';
import ListFruitsService from '../services/ListFruitsService';
import ChangeFruitService from '../services/ChangeFruitService';

const fruitsRouter = Router();

fruitsRouter.get('/', async (request, response) => {
    const listFruitsService = new ListFruitsService();
    const fruits = await listFruitsService.execute();

    return response.json(fruits);
});

fruitsRouter.post('/', async (request, response) => {
    // passarm informaçoes para o serviçe, aguardar o serviçe responder

    const { amount, price, fruit, transaction_time, is_sell } = request.body;

    const fruitsService = new FruitService();

    const fruitrequest = await fruitsService.execute({
        amount,
        price,
        fruit,
        transaction_time,
        is_sell,
    });
    return response.json(fruitrequest);
});

fruitsRouter.put('/', async (request, response) => {
    // passarm informaçoes para o serviçe, aguardar o serviçe responder

    const {
        id,
        amount,
        price,
        fruit,
        transaction_time,
        is_sell,
    } = request.body;

    const fruitsService = new ChangeFruitService();

    const fruitrequest = await fruitsService.execute({
        id,
        amount,
        price,
        fruit,
        transaction_time,
        is_sell,
    });
    return response.json(fruitrequest);
});

// Delete??

export default fruitsRouter;
