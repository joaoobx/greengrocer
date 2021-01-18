import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateSales1610983237675 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'fruits',
                columns: [
                    {
                        name: 'ID',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'Quantidade',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'Valor',
                        type: 'float',
                        isNullable: false,
                    },
                    {
                        name: 'Qual Fruta',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'Data Transação',
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
                        name: 'Compra ou Venda',
                        type: 'boolean',
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fruits');
    }
}
