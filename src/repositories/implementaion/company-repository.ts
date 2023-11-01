import { AppDataSource } from "../../data-source";
import { Company } from "../../entities/Company";

const companyRepository = AppDataSource.getRepository(Company);

export default companyRepository;
