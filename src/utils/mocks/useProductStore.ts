import { products } from './productRows';
import { productRowType } from './types';

import create from 'zustand';

type useProductStoreType = {
  productRows: productRowType[];

  getProductById: (productId: string) => productRowType | undefined;
  insertProduct: (row: productRowType) => void;
  updateProduct: (row: productRowType) => void;
};
export const useProductStore = create<useProductStoreType>((set, get) => ({
  productRows: products,

  getProductById: (productId) => {
    const product = get().productRows.find((prod) => prod.id === productId);
    return product;
  },
  insertProduct: (row) => {
    let localRows = get().productRows;
    localRows = [...localRows, row];
    set({
      productRows: localRows,
    });
  },
  updateProduct: (row) => {
    const products = get().productRows.map((prd) => (prd.id === row.id ? row : prd));
    set({
      productRows: products,
    });
  },
}));

export const insertProduct = useProductStore.getState().insertProduct;
export const getProductById = useProductStore.getState().getProductById;
export const updateProduct = useProductStore.getState().updateProduct;
