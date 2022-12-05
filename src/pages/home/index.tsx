import BasicLayout from "../../components/basic";
import { Products } from "../../components/products";
import Carrossel from "./components/carrossel";

import styles from "./styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <BasicLayout>
        <Carrossel />
        <br />
        <div className="flex">
          <Products />
        </div>
      </BasicLayout>
    </div>
  );
};

export default Home;
