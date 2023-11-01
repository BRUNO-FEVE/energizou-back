import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698695050921 implements MigrationInterface {
    name = 'Default1698695050921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`companies\` (\`cnpj\` varchar(18) NOT NULL, \`name\` text NOT NULL, \`cep\` text NOT NULL, \`address\` text NOT NULL, \`number\` text NOT NULL, \`phone\` text NOT NULL, \`user_id\` varchar(36) NULL, PRIMARY KEY (\`cnpj\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NOT NULL, \`permission\` enum ('DEFAULT', 'ADMIN') NOT NULL DEFAULT 'DEFAULT', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_ee0839cba07cb0c52602021ad4b\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_ee0839cba07cb0c52602021ad4b\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
    }

}
