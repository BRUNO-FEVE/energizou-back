import { Repository } from "typeorm";
import { ICreateCompanyDTO } from "./create-company-dto";
import { Company } from "../../entities/Company";
import { CompanyValidation } from "../../controllers/Company/company-validation";

export class CreateCompanyUsecase {
  constructor(
    private companyRepository: Repository<Company>,
    private validator: CompanyValidation
  ) {}

  async execute(data: ICreateCompanyDTO) {
    try {
      const companyProps = {
        cnpj: this.validator.cnpj(data.cnpj),
        name: this.validator.name(data.name),
        cep: this.validator.cep(data.cep),
        address: this.validator.address(data.address),
        address_number: this.validator.addressNumber(data.addressNumber),
        phone: this.validator.phone(data.phone),
        user: data.user,
      };

      const company = this.companyRepository.create(companyProps);
      const companySaved = await this.companyRepository.save(company);

      return companySaved;
    } catch (error: any) {
      console.error("Error saving user to the database:", error);
      throw new Error(error.message);
    }
  }
}
