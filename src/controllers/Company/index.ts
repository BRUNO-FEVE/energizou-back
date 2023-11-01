import companyRepository from "../../repositories/implementaion/company-repository";
import userRepository from "../../repositories/implementaion/user-repository";
import { CreateCompanyUsecase } from "../../use-cases/create-company/create-company-usecase";
import { CreateCompanyValidation } from "../../use-cases/create-company/create-company-validation";
import { GetCompanyUsecase } from "../../use-cases/get-company/get-company-usecase";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";
import { CompanyController } from "./company-controller";

const getUserUsecase = new GetUserUsecase(userRepository);

const createCompanyValidator = new CreateCompanyValidation();
const createCompanyUsecase = new CreateCompanyUsecase(
  companyRepository,
  createCompanyValidator
);

const getCompanyUsecase = new GetCompanyUsecase(companyRepository);

const companyController = new CompanyController(
  createCompanyUsecase,
  getCompanyUsecase,
  getUserUsecase
);

export { companyController };
