import styles from "./styles.module.css";
import nike_logo from "../assets/nike.png";
import ProductCard from "./ProductCard";
import { Product } from "../data/model";

interface Props {
  data: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

function Products({ data, addProduct, removeProduct }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerIcon}>
          <img src={nike_logo} alt="Nike Icon" width="50" height="26" />
        </div>

        <div className={styles.header}>
          <p className={styles.title}>Out Products</p>
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
