import BasicLayout from "../../components/basic";
import { Products } from "../../components/products";
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
        <Products />
      </div>
    </BasicLayout>
  );
};

export default Home;
