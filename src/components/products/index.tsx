import { useCart } from "../../hooks/useCart";
import { CartButton } from "../CartButton";
import { MouseEvent, useEffect, useState } from "react";
import { IProduct } from "../../contexts/CartContext";
import { Button } from "@mui/material";
import { Handbag } from "phosphor-react";

export const Products = ({ products }) => {
  console.log(products);
  const { addToCart, checkIfItemAlreadyExists } = useCart();
  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <a href={`/product/${product.id}`} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
              <Button
                disabled={checkIfItemAlreadyExists(product.id)}
                onClick={(e) => handleAddToCart(e, product)}
                className="bg-sky-600 w-full text-white hover:bg-sky-800"
              >
                <p>adicionar na sacola</p>
                <div className="text-2xl m-2">
                  <Handbag weight="bold" />
                </div>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
