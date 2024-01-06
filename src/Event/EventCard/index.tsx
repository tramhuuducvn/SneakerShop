import { Product, ServeItem, Event } from "../../data/model";
import styles from "./styles.module.css";

interface Props {
  data: Event;
  addProduct: (id: number) => void;
}

function EventCard({ data, addProduct }: Props) {
  return (
    <div className={styles.root} key={`${data.eventTitle}-`}>
      {/* image */}
      <div className={styles.imageCtn}>
        <img
          className={styles.image}
          // src={data.background}
          alt=""
          width="300"
          height="300"
        />
      </div>
      {/* info */}
      <div>
        <p className={styles.productName}>{data.eventTitle}</p>
        <p className={styles.productDesc}>{data.promotionMessage}</p>
      </div>
      </div>
  );
}

export default EventCard;

