import { Repository } from "typeorm";
import { ICreateCompanyDTO } from "./create-company-dto";
import { Company } from "../../entities/Company";
import { CreateCompanyValidation } from "./create-company-validation";

export class CreateCompanyUsecase {
  constructor(
    private userRepository: Repository<Company>,
    private validator: CreateCompanyValidation
  ) {}

  async execute(data: ICreateCompanyDTO) {
    try {
      const companyProps = {
        cnpj: this.validator.cnpj(data.cnpj),
        name: this.validator.name(data.name),
        cep: this.validator.cep(data.cep),
        address: this.validator.address(data.address),
        address_number: this.validator.addressNumber(data.address_number),
        phone: this.validator.phone(data.phone),
        user: data.user,
      };

      const company = this.userRepository.create(companyProps);
      const companySaved = await this.userRepository.save(company);

      return companySaved;
    } catch (error: any) {
      console.error("Error saving user to the database:", error);
      throw new Error(error.message);
    }
  }
}
