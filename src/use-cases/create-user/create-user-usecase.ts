import { User } from "../../entities/User";
import { ICreateUserDTO } from "./create-user-dto";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";

export class CreateUserUsecase {
  constructor(private userRepository: Repository<User>) {}

  async execute(data: ICreateUserDTO) {
    const userProps = {
      id: uuid(),
      email: data.email,
      name: data.name,
      password: data.password,
      permission: data.role,
    };

    try {
      const user = this.userRepository.create(userProps);
      const userSaved = await this.userRepository.save(user);

      return userSaved;
    } catch (error) {
      console.error("Error saving user to the database:", error);
      throw new Error("Error Saving on Data Base");
    }
  }
}
