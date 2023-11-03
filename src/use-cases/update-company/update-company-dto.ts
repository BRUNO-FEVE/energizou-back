export interface IUpdateCompanyDTO {
  userId: string;
  currentCnpj: string;
  newCnpj?: string;
  name?: string;
  cep?: number;
  address?: string;
  addressNumber?: number;
  phone?: number;
}
