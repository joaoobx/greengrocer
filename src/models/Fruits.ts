import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Fruit;
