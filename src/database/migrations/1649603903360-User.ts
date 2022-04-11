import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1649603903360 implements MigrationInterface {

    public async up (queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              {
                name: 'user_id',
                type: 'string',
                isPrimary: true
              },
              {
                name: 'name',
                type: 'string',
                isNullable: false
              },
              {
                name: 'email',
                type: 'string',
                isNullable: false,
                isPrimary: true
              }
            ]
          })
        )
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
