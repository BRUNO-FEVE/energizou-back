import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1699169882750 implements MigrationInterface {
    name = 'Default1699169882750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cep\` text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cep\` int NOT NULL`);
    }

}
