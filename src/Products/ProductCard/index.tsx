import { Product } from "../../data/model";
import styles from "./styles.module.css";
import check from "../../assets/check.png";

interface Props {
  data: Product;
  addProduct: (id: number) => void;
}

function ProductCard({ data, addProduct }: Props) {
  return (
    <div className={styles.root} key={`${data.id}-${data.color}`}>
      {/* image */}
      <div className={styles.imageCtn} style={{ backgroundColor: data.color }}>
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
      {/* price */}
      <div className={styles.priceCtn}>
        <p className={styles.priceTitle}>${data.price}</p>
        {data.total > 0 ? (
          <div className={styles.picked}>
            <img src={check} alt="" width="30" height="30" />
          </div>
        ) : (
          <div
            className={styles.buttonAddToCart}
            onClick={() => addProduct(data.id)}
          >
            ADD TO CART
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
