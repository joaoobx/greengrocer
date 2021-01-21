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

    public async createFruit(fruitDTO: Fruit): Promise<Fruit> {
        const { amount, price, fruit, transaction_time, is_sell } = fruitDTO;
        const transaction = this.create({
            amount,
            price,
            fruit,
            transaction_time,
            is_sell,
        });

        await this.save(transaction);

        return transaction;
    }
}

export default FruitRepository;
