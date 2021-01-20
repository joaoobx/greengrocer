import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Fruit from '../models/Fruits';
import FruitRepository from '../repositories/FruitRepository';

interface Request {
    id: number;
}

class FindOneFruitService {
    public async execute({ id }: Request): Promise<Fruit> {
        const fruitRepository = getCustomRepository(FruitRepository);

        const thisFruit = await fruitRepository.findOne(id);

        if (!thisFruit) {
            throw new AppError('A fruta não foi encontrada!');
        }

        return thisFruit;
    }
}

export default FindOneFruitService;
