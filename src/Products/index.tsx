import styles from "./styles.module.css";
import { Product, ServeItem } from "../data/model";
import ProductCard from "./ProductCard";

interface Props {
  data: ServeItem[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

function Products({ data, addProduct, removeProduct }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerIcon}>
          {/* <img src={nike_logo} alt="Nike Icon" width="50" height="26" /> */}
          Serve Items
        </div>

        <div className={styles.header}>
          <p className={styles.title}>Happy New Beer</p>
        </div>

        <div className={styles.list}>
          {data.map((item) => (
            <ProductCard data={item} addProduct={addProduct} />
          ))}
          <div style={{ height: 150 }}></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
