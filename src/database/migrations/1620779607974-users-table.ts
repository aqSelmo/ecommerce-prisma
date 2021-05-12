import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class usersTable1620779607974 implements MigrationInterface {
  private table = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'roles',
        type: 'char',
        length: '255',
        isNullable: false,
        isArray: true,
      },
      {
        name: 'birthday',
        type: 'varchar',
        length: '10',
        isNullable: false,
      },
      {
        name: 'cpf',
        type: 'varchar',
        length: '15',
        isNullable: false,
        isUnique: true,
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '27',
        isNullable: false,
      },
      {
        name: 'createdAt',
        type: 'timestamp',
        default: 'now()',
      },
      {
        name: 'updatedAt',
        type: 'timestamp',
        default: 'now()',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable(this.table);
  }
}
