export interface IUpdateCompanyDTO {
  userId: string;
  currentCnpj: string;
  newCnpj?: string;
  name?: string;
  cep?: number;
  address?: string;
  address_number?: number;
  phone?: number;
}
