import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698855652259 implements MigrationInterface {
    name = 'Default1698855652259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`phone\` bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP COLUMN \`phone\``);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD \`phone\` int NOT NULL`);
    }

}
