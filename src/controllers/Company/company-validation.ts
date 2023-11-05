const CNPJ_FIXED_LENGTH = 14;
const CEP_FIXED_LENGTH = 8;
const PHONE_FIXED_LENGTH_MIN = 10;
const PHONE_FIXED_LENGTH_MAX = 14;
const MIN_STRING_LENGTH = 3;

export class CompanyValidation {
  cnpj(cnpj: string | undefined) {
    if (!cnpj) return;

    if (cnpj.length !== CNPJ_FIXED_LENGTH) {
      throw new Error("Invalid CNPJ");
    }
    return cnpj;
  }

  name(name: string | undefined) {
    if (!name) return;

    if (name.length < MIN_STRING_LENGTH) {
      throw new Error("Invalid Name");
    }
    return name;
  }

  cep(cep: string | undefined) {
    if (!cep) return;

    const cepLength = cep.length;
    console.log(cepLength);
    if (cepLength !== CEP_FIXED_LENGTH) {
      throw new Error("Invalid CEP");
    }
    return cep;
  }

  address(address: string | undefined) {
    if (!address) return;

    if (address.length < MIN_STRING_LENGTH) {
      throw new Error("Invalid Address");
    }
    return address;
  }

  addressNumber(addressNumber: number | undefined) {
    if (!addressNumber) return;

    if (addressNumber < 0) {
      throw new Error("Invalid Address Number");
    }
    return addressNumber;
  }

  phone(phone: number | undefined) {
    if (!phone) return;

    const phoneLength = phone.toString().length;
    console.log(phoneLength);
    if (
      phoneLength < PHONE_FIXED_LENGTH_MIN ||
      phoneLength > PHONE_FIXED_LENGTH_MAX
    ) {
      throw new Error("Invalid Phone Number");
    }
    return phone;
  }
}
