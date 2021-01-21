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
    // logica que verifica se o request é SELL OU BUY request.

    const { amount, price, fruit, transaction_time } = request.body;

    const fruitsService = new CreateFruitService();

    const fruitrequest = await fruitsService.execute({
        amount,
        price,
        fruit,
        transaction_time,
        is_sell: false, // se logica lá de cima ver que é sell então true
    });

    // registra se FOR VENDA /\ na tabela que vc quiser o que vc quiser......
    // só precisa criar o Serviço, Movel, Repository, Tabela,

    return response.json(fruitrequest);
});

fruitsRouter.put('/:id', async (request, response) => {
    // passar informaçoes para o service, aguardar o serviçe responder
    const { amount, price, fruit, transaction_time, is_sell } = request.body;

    const id = +request.params.id;
    // buscar fruta com id informado no banco, se não encontrada, responder que nãio pode editar, pois fruta não existe
    const findOneFruitService = new FindOneFruitService();
    const frutaAchada = await findOneFruitService.execute({
        id,
    });

    // se fruta achada foi comprada nos ultimos 3 dias... lembrando que o dia começa as 00:00 e não na hora da compra

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
