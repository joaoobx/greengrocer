import { getCustomRepository } from 'typeorm';

import Fruit from '../models/Fruits';
import FruitRepository from '../repositories/FruitRepository';

interface Request {
    amount: number;
    price: number;
    fruit: string;
    transaction_time?: Date;
    is_sell: boolean;
}

class TransactionService {
    public async execute({
        amount,
        price,
        fruit,
        transaction_time,
        is_sell,
    }: Request): Promise<Fruit> {
        const fruitRepository = getCustomRepository(FruitRepository);

        const transaction = await fruitRepository.createFruit({
            amount,
            price,
            fruit,
            transaction_time,
            is_sell,
        });

        return transaction;
    }
}

export default TransactionService;
