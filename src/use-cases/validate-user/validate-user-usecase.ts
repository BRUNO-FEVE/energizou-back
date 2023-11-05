import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { IValidateUserDTO } from "./validate-user-dto";
import bcrypt from "bcrypt";

export class ValidateUserUsecase {
  constructor(private userRepository: Repository<User>) {}

  async execute(data: IValidateUserDTO) {
    const { email, password } = data;

    try {
      const user = await this.userRepository.findOneBy({
        email,
      });

      if (!user) {
        throw new Error("Usuario Invalido");
      }

      console.log(user.password);
      console.log(password);

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new Error("Senha/Usuario Invalido");
      }

      return user;
    } catch (error) {
      console.error("Error validating the user to the database:", error);
      throw error;
    }
  }
}
