export type autocompleteType = {
  id: string;
  name: string;
};

export interface productItemRowType extends Record<string, any> {
  id: string;
  name: string;
  code: string;
  description: string;
  measurementUnity: string;
  tablePrice?: number;
  defaultAmount: number;
  minAmount: number;
  maxAmount: number;
  category: autocompleteType;
}

export interface productRowType extends Record<string, any> {
  id: string;
  name: string;
  category: autocompleteType;
  measureType: autocompleteType;
  description: string;
  technicalSeal: autocompleteType;
  quantity: string;
  componentizedProduct: boolean;
  productComponents: productItemRowType[];
}
