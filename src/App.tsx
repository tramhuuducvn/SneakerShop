import { useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import Cart from "./Cart";
import Products from "./Products";
import { ServeItem, Event } from "./data/model";
import { eventList, items, products } from "./data/data";
import Events from "./Event";



function App() {
  const event: Event = {
    eventTitle: "January Happy Day",
    background: "",
    eventTimeline: {
      startTime: new Date(),
      endTime: new Date()
    },
    numberItem: 4,
    promotionMessage: "Happy New Year",
    registrationTime: {
      startTime: new Date(),
      endTime: new Date()
    }
  }
  
  const [data, setData] = useState<ServeItem[]>(items);
  const [events, setEvents] = useState<Event[]>(eventList);
  // const cart: ServeItem[] = useMemo(() => {
  //   return data.filter((item) => item.total > 0);
  // }, [data]);

  // add and increase func
  const addProduct = (id: number) => {
    // setData((prev) => {
    //   return prev.map((item) => {
    //     if (item.id == id) {
    //       return {
    //         ...item,
    //         total: item.total + 1,
    //       };
    //     }
    //     return item;
    //   });
    // });
  };

  // const decreaseProduct = (id: number) => {
  //   setData((prev) => {
  //     return prev.map((item) => {
  //       if (item.id == id) {
  //         return {
  //           ...item,
  //           total: item.total > 0 ? item.total - 1 : 0,
  //         };
  //       }
  //       return item;
  //     });
  //   });
  // };

  const removeProduct = (id: number) => {
    setData((prev) => {
      return prev.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            total: 0,
          };
        }
        return item;
      });
    });
  };

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.wrap}>
        <div className={styles.box}>
            <Events 
                data={eventList}
                addProduct={addProduct}
                removeProduct={removeProduct}
            />
          </div>
          <div className={styles.box}>
            <Products
              data={data}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
          </div>
          <div className={styles.box}>
            {/* <Cart
              cart={cart}
              addProduct={addProduct}
              decreaseProduct={decreaseProduct}
              removeProduct={removeProduct}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
