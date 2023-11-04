import userRepository from "../../repositories/implementaion/user-repository";
import { CreateUserUsecase } from "../../use-cases/create-user/create-user-usecase";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";
import { ValidateUserUsecase } from "../../use-cases/validate-user/validate-user-usecase";
import { UserController } from "./user-controller";

const createUserUsecase = new CreateUserUsecase(userRepository);
const getUserUsecase = new GetUserUsecase(userRepository);
const validateUserUsecase = new ValidateUserUsecase(userRepository);

const userRouteController = new UserController(
  createUserUsecase,
  getUserUsecase,
  validateUserUsecase
);

export default userRouteController;
