import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/hooks/use-shopping-cart";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <Toaster />
    </>
  );
}
