import companyRepository from "../../repositories/implementaion/company-repository";
import userRepository from "../../repositories/implementaion/user-repository";
import { CreateCompanyUsecase } from "../../use-cases/create-company/create-company-usecase";
import { CreateCompanyValidation } from "../../use-cases/create-company/create-company-validation";
import { DeleteCompanyUsecase } from "../../use-cases/delete-company/delete-company-usecase";
import GetAllCompaniesByUserUsecase from "../../use-cases/get-all-companies-by-user/get-all-companies-by-user-usecase";
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
const getAllByUserIdUsecase = new GetAllCompaniesByUserUsecase(
  companyRepository
);

const deleteCompanyUsecase = new DeleteCompanyUsecase(companyRepository);

const companyController = new CompanyController(
  createCompanyUsecase,
  getCompanyUsecase,
  getUserUsecase,
  getAllByUserIdUsecase,
  deleteCompanyUsecase
);

export { companyController };
