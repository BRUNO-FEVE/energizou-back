import companyRepository from "../../repositories/implementaion/company-repository";
import userRepository from "../../repositories/implementaion/user-repository";
import { CreateCompanyUsecase } from "../../use-cases/create-company/create-company-usecase";
import { CreateCompanyValidation } from "../../use-cases/create-company/create-company-validation";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";
import { CompanyController } from "./company-controller";

const getUserUsecase = new GetUserUsecase(userRepository);

const createCompanyValidator = new CreateCompanyValidation();
const createCompanyUsecase = new CreateCompanyUsecase(
  companyRepository,
  createCompanyValidator
);

const companyController = new CompanyController(
  createCompanyUsecase,
  getUserUsecase
);

export { companyController };
