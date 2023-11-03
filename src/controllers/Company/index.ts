import companyRepository from "../../repositories/implementaion/company-repository";
import userRepository from "../../repositories/implementaion/user-repository";
import { CreateCompanyUsecase } from "../../use-cases/create-company/create-company-usecase";
import { CompanyValidation } from "./company-validation";
import { DeleteCompanyUsecase } from "../../use-cases/delete-company/delete-company-usecase";
import GetAllCompaniesByUserUsecase from "../../use-cases/get-all-companies-by-user/get-all-companies-by-user-usecase";
import { GetCompanyUsecase } from "../../use-cases/get-company/get-company-usecase";
import { GetUserUsecase } from "../../use-cases/get-user/get-user-usecase";
import { CompanyController } from "./company-controller";
import { UpdateCompanyUsecase } from "../../use-cases/update-company/update-company-usecase";

const getUserUsecase = new GetUserUsecase(userRepository);

const createCompanyValidator = new CompanyValidation();
const createCompanyUsecase = new CreateCompanyUsecase(
  companyRepository,
  createCompanyValidator
);

const getCompanyUsecase = new GetCompanyUsecase(companyRepository);
const getAllByUserIdUsecase = new GetAllCompaniesByUserUsecase(
  companyRepository
);

const deleteCompanyUsecase = new DeleteCompanyUsecase(companyRepository);

const updateCompanyUsecase = new UpdateCompanyUsecase(companyRepository);

const companyController = new CompanyController(
  createCompanyUsecase,
  getCompanyUsecase,
  getUserUsecase,
  getAllByUserIdUsecase,
  deleteCompanyUsecase,
  updateCompanyUsecase
);

export { companyController };
