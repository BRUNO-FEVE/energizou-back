import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698855513062 implements MigrationInterface {
    name = 'Default1698855513062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cnpj\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cnpj\` varchar(14) NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cnpj\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cnpj\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD PRIMARY KEY (\`cnpj\`)`);
    }

}
