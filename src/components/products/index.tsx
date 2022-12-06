import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../pages/api/api";
import { loadStripe } from "@stripe/stripe-js";
import products from "@utils/products";
import ProductCard from "./ProductCard";

const getStripe = () => {
  let stripePromise;
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string);
  }
  return stripePromise;
};

export default getStripe;
export const Products = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="bg-white w-full p-12">
      <div>
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              disabled={disabled}
              onClickAdd={() => setDisabled(true)}
              onAddEnded={() => setDisabled(false)}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
