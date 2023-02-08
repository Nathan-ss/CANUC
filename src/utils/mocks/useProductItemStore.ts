import { productItemRowType } from './types';
import { productItems } from './productRows';

import create from 'zustand';

type useProductItemStoreType = {
  productItemRows: productItemRowType[];
  getProductItemById: (product_id: string) => productItemRowType | undefined;
  insertProductItem: (row: productItemRowType) => void;
  updateProductItem: (row: productItemRowType) => void;
  deleteProductItemById: (row: productItemRowType) => void;
};

export const useProductItemStore = create<useProductItemStoreType>((set, get) => ({
  productItemRows: productItems,
  getProductItemById: (product_id) => {
    const productItem = get().productItemRows.find((prod) => prod.id === product_id);
    return productItem;
  },
  insertProductItem: (row) => {
    let localRows = get().productItemRows;
    localRows = [...localRows, row];
    set({
      productItemRows: localRows,
    });
  },
  updateProductItem: (row) => {
    const products = get().productItemRows.map((prdItm) => (prdItm.id === row.id ? row : prdItm));
    set({
      productItemRows: products,
    });
  },
  deleteProductItemById: (row) => {
    const products = get().productItemRows.filter((prdItm) => prdItm.id !== row.id);

    set({
      productItemRows: products,
    });
  },
}));

export const getProductItemById = useProductItemStore.getState().getProductItemById;
export const insertProductItem = useProductItemStore.getState().insertProductItem;
export const updateProductItem = useProductItemStore.getState().updateProductItem;
export const deleteProductItemById = useProductItemStore.getState().deleteProductItemById;
