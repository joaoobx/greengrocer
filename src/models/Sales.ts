/* eslint-disable camelcase */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales')
class Sales {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    amount: number;

    @Column()
    price: number;

    @Column()
    fruit: string;

    @Column('timestamp')
    transaction_time: Date;

    @Column('timestamp')
    created_at: Date;

    @Column('timestamp')
    updated_at: Date;

    @Column()
    is_sell: boolean;
}

export default Sales;
