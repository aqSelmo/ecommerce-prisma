import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class categoriesTable1620784315787 implements MigrationInterface {
  private table = new Table({
    name: 'categories',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'title',
        type: 'text',
        isNullable: false,
        isUnique: false,
      },
      {
        name: 'slug',
        type: 'text',
        isNullable: false,
        isUnique: false,
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
