import { Products } from "@/components/products";

import { useState } from "react";
import BasicLayout from "../../components/basic";

import Carrossel from "./components/carrossel";

import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <BasicLayout>
      <div className={styles.carrossel}>
        <Carrossel />
        <br />
      </div>
      <div className="flex flex-col items-center">
        <h1>Products</h1>
        <div className="container xl:max-w-screen-xl mx-auto pt-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"></div>
        </div>
        <Products />
      </div>
    </BasicLayout>
  );
};

export default Home;
