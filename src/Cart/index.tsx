import styles from "./styles.module.css";
import nike_logo from "../assets/nike.png";
import ProductCard from "./ProductCard";
import { Product } from "../data/model";
import { useMemo } from "react";

interface Props {
  cart: Product[];
  addProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

function Cart({ cart, addProduct, decreaseProduct, removeProduct }: Props) {
  const totalPice = useMemo(() => {
    const sum = cart.reduce((total, item) => {
      return total + item.price * item.total;
    }, 0);
    return sum.toFixed(2);
  }, [cart]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.headerIcon}>
          <img src={nike_logo} alt="Nike Icon" width="50" height="26" />
        </div>

        <div className={styles.header}>
          <p className={styles.title}>Your cart</p>
          <p className={styles.title}>${totalPice}</p>
        </div>

        {cart.length < 1 && (
          <p style={{ textAlign: "left", marginLeft: 28 }}>
            Your cart is empty
          </p>
        )}

        <div className={styles.list}>
          {cart.map((item) => (
            <ProductCard
              key={`${item.id}-${item.color}`}
              data={item}
              addProduct={addProduct}
              decreaseProduct={decreaseProduct}
              removeProduct={removeProduct}
            />
          ))}
          <div style={{ height: 150 }}></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
