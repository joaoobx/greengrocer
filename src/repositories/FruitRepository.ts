import { isEqual } from 'date-fns';
import { Entity, EntityRepository, Repository } from 'typeorm';
import Fruit from '../models/Fruits';

@EntityRepository(Fruit)
class FruitRepository extends Repository<Fruit> {
    public async findByDate(date: Date): Promise<Fruit | null> {
        /* const findFruit = this.Fruit.find(fruit => isEqual(date, fruit.date),
        ); */

        const findFruit = await this.findOne({
            where: { date },
        });

        return findFruit || null;
    }
}

export default FruitRepository;
