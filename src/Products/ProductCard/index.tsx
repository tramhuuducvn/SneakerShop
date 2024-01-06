import { Product, ServeItem } from "../../data/model";
import styles from "./styles.module.css";
import check from "../../assets/check.png";

interface Props {
  data: ServeItem;
  addProduct: (id: number) => void;
}

function ProductCard({ data, addProduct }: Props) {
  return (
    <div className={styles.root} key={`${data.id}-`}>
      {/* image */}
      <div className={styles.imageCtn}>
        <img
          className={styles.image}
          src={data.image}
          alt=""
          width="300"
          height="300"
        />
      </div>
      {/* info */}
      <div>
        <p className={styles.productName}>{data.name}</p>
        <p className={styles.productDesc}>{data.description}</p>
      </div>
      </div>
  );
}

export default ProductCard;
