import { Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { IUpdateCompanyDTO } from "./update-company-dto";
import { CompanyValidation } from "../../controllers/Company/company-validation";

export class UpdateCompanyUsecase {
  constructor(
    private companyRepository: Repository<Company>,
    private companyValidation: CompanyValidation
  ) {}

  async execute(data: IUpdateCompanyDTO) {
    try {
      const companyUpdated = await this.companyRepository.update(
        { cnpj: data.currentCnpj },
        {
          cnpj: this.companyValidation.cnpj(data.newCnpj),
          name: this.companyValidation.name(data.name),
          cep: this.companyValidation.cep(data.cep),
          address: this.companyValidation.address(data.address),
          address_number: this.companyValidation.addressNumber(
            data.address_number
          ),
          phone: this.companyValidation.phone(data.phone),
        }
      );

      return companyUpdated;
    } catch (error: any) {
      console.error("Error updating company to the database:", error);
      throw new Error(error.message);
    }
  }
}
