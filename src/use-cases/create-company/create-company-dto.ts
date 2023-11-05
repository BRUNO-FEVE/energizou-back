import { User } from "../../entities/User";

export interface ICreateCompanyDTO {
  cnpj: string;
  name: string;
  cep: string;
  address: string;
  addressNumber: number;
  phone: number;
  user: User;
}
