export interface IUpdateCompanyDTO {
  userId: string;
  currentCnpj: string;
  newCnpj?: string;
  name?: string;
  cep?: string;
  address?: string;
  addressNumber?: number;
  phone?: number;
}
