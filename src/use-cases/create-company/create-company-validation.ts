const CNPJ_FIXED_LENGTH = 14;
const CEP_FIXED_LENGTH = 8;
const PHONE_FIXED_LENGTH = 14;
const MIN_STRING_LENGTH = 3;

export class CreateCompanyValidation {
  cnpj(cnpj: string) {
    if (cnpj.length !== CNPJ_FIXED_LENGTH) {
      throw new Error("Invalid CNPJ");
    }
    return cnpj;
  }

  name(name: string) {
    if (name.length < MIN_STRING_LENGTH) {
      throw new Error("Invalid Name");
    }
    return name;
  }

  cep(cep: number) {
    const cepString = cep.toString();
    if (cepString.length !== CEP_FIXED_LENGTH) {
      throw new Error("Invalid CEP");
    }
    if (!/^\d+$/.test(cepString)) {
      throw new Error("Invalid CEP");
    }
    return cep;
  }

  address(address: string) {
    if (address.length < MIN_STRING_LENGTH) {
      throw new Error("Invalid Address");
    }
    return address;
  }

  addressNumber(addressNumber: number) {
    if (addressNumber < 0) {
      throw new Error("Invalid Address Number");
    }
    return addressNumber;
  }

  phone(phone: number) {
    const phoneString = phone.toString();
    if (phoneString.length !== PHONE_FIXED_LENGTH) {
      throw new Error("Invalid Phone Number");
    }
    return phone;
  }
}
