import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UserSeeder } from "./UserSeeder";

export class MainSeeder implements Seeder {
  track?: boolean | undefined;
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    await runSeeder(dataSource, UserSeeder);
  }
}
