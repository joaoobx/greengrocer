import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSales1610983237675 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'fruits',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'amount',
                        type: 'int',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'fruit',
                        type: 'varchar',
                    },
                    {
                        name: 'transaction_time',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'is_sell',
                        type: 'boolean',
                        default: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fruits');
    }
}
