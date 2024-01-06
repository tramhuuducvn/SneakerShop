import styles from "./styles.module.css";
import { Product, ServeItem , Event } from "../data/model";
import EventCard from "./EventCard";

interface Props {
  data: Event[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

function Events({ data, addProduct, removeProduct }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerIcon}>
          {/* <img src={nike_logo} alt="Nike Icon" width="50" height="26" /> */}
          KMS Happy Day Events
        </div>

        {/* <div className={styles.header}>
          <p className={styles.title}>Happy New Beer</p>
        </div> */}

        <div className={styles.list}>
          {data.map((item) => (
            <EventCard data={item} addProduct={addProduct} />
          ))}
          <div style={{ height: 150 }}></div>
        </div>
      </div>
    </div>
  );
}

export default Events;
