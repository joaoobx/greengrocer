/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

interface IFruit {
    id: number;
    amount: number;
    price: number;
    fruit: string;
    transactionDate: Date;
    createdAt: Date;
    editedAt: Date;
    buyOrSell: boolean;
}

@Entity('fruits')
class Fruit {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    amount: number;

    @Column()
    price: number;

    @Column()
    fruit: string;

    @Column('timestamp')
    transactionDate: Date;

    @Column('timestamp')
    createdAt: Date;

    @Column('timestamp')
    editedAt: Date;

    @Column()
    buyOrSell: boolean;

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor({
        id,
        amount,
        price,
        fruit,
        transactionDate,
        createdAt,
        editedAt,
        buyOrSell,
    }: IFruit) {
        this.id = id;
        this.amount = amount;
        this.price = price;
        this.fruit = fruit;
        this.transactionDate = transactionDate;
        this.createdAt = createdAt;
        this.editedAt = editedAt;
        this.buyOrSell = buyOrSell;
    }
}

export default Fruit;
