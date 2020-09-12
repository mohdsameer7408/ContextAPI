import React, { useState, createContext } from "react";

export const StoreContext = createContext();

export const StoreProvider = (props) => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dell",
      price: "$24",
    },
    {
      id: 2,
      name: "Acer",
      price: "$59",
    },
    {
      id: 3,
      name: "Lenovo",
      price: "$38",
    },
    {
      id: 4,
      name: "HP",
      price: "$46",
    },
    {
      id: 5,
      name: "ASUS",
      price: "$52",
    },
  ]);
  return (
    <StoreContext.Provider value={[items, setItems]}>
      {props.children}
    </StoreContext.Provider>
  );
};
