import userRepository from "../../repositories/implementaion/user-repository";
import { CreateUserUsecase } from "../../use-cases/create-user/create-user-usecase";
import { UserController } from "./user-controller";

const createUserUsecase = new CreateUserUsecase(userRepository);

const userRouteController = new UserController(createUserUsecase);

export default userRouteController;
