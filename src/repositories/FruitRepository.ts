import { EntityRepository, Repository } from 'typeorm';
import Fruit from '../models/Fruits';

@EntityRepository(Fruit)
class FruitRepository extends Repository<Fruit> {
    public async findById(id: number): Promise<Fruit | null> {
        const findFruit = await this.findOne({
            where: { id },
        });

        return findFruit || null;
    }

    // create
}

export default FruitRepository;
