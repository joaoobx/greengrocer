import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Fruit from '../models/Fruits';
import FruitRepository from '../repositories/FruitRepository';

interface Request {
    id: number;
    amount: number;
    price: number;
    fruit: string;
    transaction_time?: Date;
    is_sell: boolean;
}

class CreateSalesLogService {
    public async execute({
        id,
        amount,
        price,
        fruit,
        transaction_time,
        is_sell,
    }: Request): Promise<Fruit> {
        const fruitRepository = getCustomRepository(FruitRepository);

        const thisFruit = await fruitRepository.findOne(id);

        if (!thisFruit) {
            throw new AppError('A fruta não foi encontrada!');
        }

        thisFruit.amount = amount;
        thisFruit.price = price;
        thisFruit.fruit = fruit;
        thisFruit.transaction_time = transaction_time || new Date();
        thisFruit.is_sell = is_sell;

        await fruitRepository.save(thisFruit);

        return thisFruit;
    }
}

export default CreateSalesLogService;
