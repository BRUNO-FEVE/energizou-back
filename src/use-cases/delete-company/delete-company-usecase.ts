import { Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { IDeleteCompanyDTO } from "./delete-company-dto";

export class DeleteCompanyUsecase {
  constructor(private companyRepository: Repository<Company>) {}

  async execute(data: IDeleteCompanyDTO) {
    const { userId, companyCnpj } = data;

    try {
      const company = await this.companyRepository.findOneOrFail({
        relations: {
          user: true,
        },
        where: {
          cnpj: companyCnpj,
        },
      });

      if (company.user.id !== userId) {
        throw new Error("Permission Denied");
      }

      this.companyRepository.delete(company);

      return company;
    } catch (error: any) {
      console.error("Error getting user on the database:", error);
      throw new Error(error.message);
    }
  }
}
