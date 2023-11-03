import { Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { IGetCompanyDTO } from "./get-company-dto";

export class GetCompanyUsecase {
  constructor(private companyRepository: Repository<Company>) {}

  async execute(data: IGetCompanyDTO) {
    const cnpj = data.companyCnpj;

    try {
      const user = await this.companyRepository.findOneOrFail({
        relations: {
          user: true,
        },
        where: { cnpj },
      });

      return user;
    } catch (error: any) {
      console.error("Error getting user on the database:", error);
      throw new Error(error.message);
    }
  }
}
