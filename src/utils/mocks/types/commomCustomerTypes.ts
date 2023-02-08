export type addressType = {
  zipCode: string;
  uf: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
};
export type contactType = {
  name: string;
  job_position: string;
  phone: string;
  email: string;
  isCfo: boolean;
};

export type customerListItemType = {
  id: string;
  name: string;
  cnpj: string;
  sector: string;
  classificacao: string;
  students_amount: number;
  address: addressType;
  contacts: contactType[];
};
