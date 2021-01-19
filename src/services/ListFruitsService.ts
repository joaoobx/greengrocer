import { getCustomRepository } from 'typeorm';

import Fruit from '../models/Fruits';
import FruitRepository from '../repositories/FruitRepository';

class ListFruitsService {
    public async execute(): Promise<Fruit[]> {
        const fruitRepository = getCustomRepository(FruitRepository);

        const fruits = fruitRepository.find();

        return fruits;
    }
}

export default ListFruitsService;
