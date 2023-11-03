import { Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { IUpdateCompanyDTO } from "./update-company-dto";

export class UpdateCompanyUsecase {
  constructor(private companyRepository: Repository<Company>) {}

  async execute(data: IUpdateCompanyDTO) {
    try {
      const companyUpdated = await this.companyRepository.update(
        { cnpj: data.currentCnpj },
        {
          cnpj: data.newCnpj,
          name: data.name,
          cep: data.cep,
          address: data.address,
          address_number: data.address_number,
          phone: data.phone,
        }
      );

      return companyUpdated;
    } catch (error: any) {
      console.error("Error updating company to the database:", error);
      throw new Error(error.message);
    }
  }
}
