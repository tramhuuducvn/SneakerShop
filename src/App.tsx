import styles from "./App.module.css";
import Products from "./Products";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.box}>
            <Products />
          </div>
          <div className={styles.box}>
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
