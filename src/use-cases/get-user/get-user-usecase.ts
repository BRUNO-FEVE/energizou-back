import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { IGetUserDTO } from "./get-user-dto";

export class GetUserUsecase {
  constructor(private userRepository: Repository<User>) {}

  async execute(data: IGetUserDTO) {
    const id = data.user_id;

    try {
      const user = await this.userRepository.findOneByOrFail({ id: id });

      return user;
    } catch (error) {
      console.error("Error getting user on the database:", error);
      throw new Error("Error Getting User on Data Base");
    }
  }
}
