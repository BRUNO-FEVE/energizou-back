import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { User } from "../entities/User";

export class UserSeeder implements Seeder {
  track?: boolean | undefined;
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);

    const userData = {
      id: uuid(),
      email: "nicolas.stelatto@energizou.com.br",
      name: "Nicolas Stelatto",
      password: await bcrypt.hash("energizou", 10),
      permission: "ADMIN",
    };

    const newUser = userRepository.create(userData);

    const userExists = await userRepository.findOne({
      where: { id: newUser.id },
    });

    if (!userExists) {
      await userRepository.save(newUser);
    }
  }
}
