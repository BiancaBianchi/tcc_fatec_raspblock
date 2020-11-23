import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class projects1605117369623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'projects',
            columns: [
                {
                    name:'id',
                    type:'integer',
                    isPrimary: true,
                    isGenerated: true,
                    unsigned:true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'project',
                    type:'text'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('projects')
    }

}
