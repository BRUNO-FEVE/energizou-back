import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698848908473 implements MigrationInterface {
    name = 'Default1698848908473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` CHANGE \`number\` \`address_number\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` CHANGE \`address_number\` \`number\` int NOT NULL`);
    }

}
