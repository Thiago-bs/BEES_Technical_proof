import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBeers1611283627938 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'beers',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy: "increment",
                },
                {
                    name: 'name',
                    type: 'string',
                },
                {
                    name: 'detail',
                    type: 'string',
                },
                {
                    name: 'cost',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'promotion',
                    type: 'string',
                },
                {
                    name: 'image_url',
                    type: 'string',
                },
                {
                    name: 'amount',
                    type: 'number',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('beers')
    }

}
