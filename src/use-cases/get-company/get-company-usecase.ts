import { Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { IGetCompanyDTO } from "./get-company-dto";

export class GetCompanyUsecase {
  constructor(private companyRepository: Repository<Company>) {}

  async execute(data: IGetCompanyDTO) {
    const cnpj = data.company_cnpj;

    try {
      const user = await this.companyRepository.findOneByOrFail({ cnpj });

      return user;
    } catch (error: any) {
      console.error("Error getting user on the database:", error);
      throw new Error(error.message);
    }
  }
}
