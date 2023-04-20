import { useState } from "react";
import { Product } from "../../data/model";
import styles from "./styles.module.css";
import check from "../../assets/check.png";

interface Props {
  data: Product;
}

function ProductCard({ data }: Props) {
  const [added, setAdded] = useState<boolean>(false);

  return (
    <div className={styles.root}>
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
        {added ? (
          <div className={styles.picked}>
            <img src={check} alt="" width="30" height="30" />
          </div>
        ) : (
          <div
            className={styles.buttonAddToCart}
            onClick={() => setAdded(true)}
          >
            ADD TO CART
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
