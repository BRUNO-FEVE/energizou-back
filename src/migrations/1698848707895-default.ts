import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698848707895 implements MigrationInterface {
    name = 'Default1698848707895'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cnpj\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cnpj\` int NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cep\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`number\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`phone\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`phone\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`number\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`number\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cep\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cep\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`cnpj\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`cnpj\` varchar(18) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD PRIMARY KEY (\`cnpj\`)`);
    }

}
