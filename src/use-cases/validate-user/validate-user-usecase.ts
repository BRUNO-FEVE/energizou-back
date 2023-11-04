import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { IValidateUserDTO } from "./validate-user-dto";

export class ValidateUserUsecase {
  constructor(private userRepository: Repository<User>) {}

  async execute(data: IValidateUserDTO) {
    const { username, password } = data;

    try {
      const userExist = await this.userRepository.exist({
        where: {
          name: username,
        },
      });

      if (!userExist) {
        return "Usuario Invalido";
      }

      const user = await this.userRepository.findOneBy({
        name: username,
      });

      if (user?.password !== password) {
        return "Senha/Usuario Invalido";
      }

      return user;
    } catch (error: any) {
      console.error("Error validating the user to the database:", error);
    }
  }
}
