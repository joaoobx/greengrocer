import { Router } from 'express';
import CreateFruitService from '../services/CreateFruitService';
import ListFruitsService from '../services/ListFruitsService';
import ChangeFruitService from '../services/ChangeFruitService';
import FindOneFruitService from '../services/FindOneFruitService';

const fruitsRouter = Router();

fruitsRouter.get('/', async (request, response) => {
    const listFruitsService = new ListFruitsService();
    const fruits = await listFruitsService.execute();

    return response.json(fruits);
});

fruitsRouter.post('/', async (request, response) => {
    // passarm informaçoes para o serviçe, aguardar o serviçe responder

    const { amount, price, fruit, transaction_time, is_sell } = request.body;

    const fruitsService = new CreateFruitService();

    const fruitrequest = await fruitsService.execute({
        amount,
        price,
        fruit,
        transaction_time,
        is_sell,
    });
    return response.json(fruitrequest);
});

fruitsRouter.put('/:id', async (request, response) => {
    // passar informaçoes para o service, aguardar o serviçe responder
    const { amount, price, fruit, transaction_time, is_sell } = request.body;

    const id = +request.params.id;
    // buscar fruta com id informado no banco, se não encontrada, responder que nãio pode editar, pois fruta não existe
    const findOneFruitService = new FindOneFruitService();
    await findOneFruitService.execute({
        id,
    });
    // se a fruta existir executar atualização da fruta
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
