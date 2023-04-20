import { Product } from "../../data/model";
import styles from "./styles.module.css";
import deleteIcon from "../../assets/trash.png";
import plusIcon from "../../assets/plus.png";
import minusIcon from "../../assets/minus.png";

interface Props {
  data: Product;
  addProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

function ProductCard({
  data,
  addProduct,
  decreaseProduct,
  removeProduct,
}: Props) {
  return (
    <div className={styles.root} key={`${data.id}-${data.color}`}>
      {/* image */}
      <div className={styles.imageCtn} style={{ backgroundColor: data.color }}>
        <img
          className={styles.image}
          src={data.image}
          alt=""
          width="100"
          height="100"
        />
      </div>
      {/* info */}
      <div className={styles.infoCtn}>
        <p className={styles.productName}>{data.name}</p>
        <p className={styles.priceTitle}>${data.price}</p>
        {/* action */}
        <div className={styles.actionCtn}>
          <div className={styles.actionChildCtn}>
            <div
              className={styles.button}
              onClick={() => decreaseProduct(data.id)}
            >
              <img src={minusIcon} alt="" width={12} height={12} />
            </div>
            <p className={styles.totalText}>{data.total}</p>
            <div className={styles.button} onClick={() => addProduct(data.id)}>
              <img src={plusIcon} alt="" width={12} height={12} />
            </div>
          </div>
          <div
            className={styles.deleteBtn}
            onClick={() => removeProduct(data.id)}
          >
            <img src={deleteIcon} alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
