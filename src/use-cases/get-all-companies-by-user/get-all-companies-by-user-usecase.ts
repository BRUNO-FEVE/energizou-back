import { Repository } from "typeorm";
import { Company } from "../../entities/Company";
import { IGetAllCompaniesByUserDTO } from "./get-all-companies-by-user-dto";

export default class GetAllCompaniesByUserUsecase {
  constructor(private companyRepository: Repository<Company>) {}

  async execute(data: IGetAllCompaniesByUserDTO) {
    const user = data.user;

    try {
      const companies = await this.companyRepository.find({
        where: {
          user: { id: user.id },
        },
      });

      return companies;
    } catch (error: any) {
      console.error("Error getting user on the database:", error);
      throw new Error(error.message);
    }
  }
}
