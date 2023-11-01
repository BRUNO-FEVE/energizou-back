import { User } from "../../entities/User";

export interface ICreateCompanyDTO {
  cnpj: string;
  name: string;
  cep: number;
  address: string;
  address_number: number;
  phone: number;
  user: User;
}
