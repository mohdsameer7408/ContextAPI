import React, { useContext } from "react";
import Product from "./product";
import { StoreContext } from "../storeContext";

const Store = () => {
  const [items] = useContext(StoreContext);

  return (
    <React.Fragment>
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </React.Fragment>
  );
};

export default Store;
