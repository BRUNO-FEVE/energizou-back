import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698847396208 implements MigrationInterface {
    name = 'Default1698847396208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`permission\` \`role\` enum ('DEFAULT', 'ADMIN') NOT NULL DEFAULT 'DEFAULT'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`role\` \`permission\` enum ('DEFAULT', 'ADMIN') NOT NULL DEFAULT 'DEFAULT'`);
    }

}
