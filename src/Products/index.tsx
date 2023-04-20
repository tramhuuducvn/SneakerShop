import styles from "./styles.module.css";
import nike_logo from "../assets/nike.png";
import ProductCard from "./ProductCard";
import { products } from "../data/data";

function Products() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerIcon}>
          <img src={nike_logo} alt="Nike Icon" width="100" height="52" />
        </div>

        <div className={styles.headerIcon}>
          <p className={styles.title}>Out Products</p>
        </div>

        <div className={styles.list}>
          {products.map((item) => (
            <ProductCard data={item} />
          ))}
          <div style={{ height: 150 }}></div>
        </div>
      </div>
    </div>
  );
}

export default Products;
