import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../storeContext";

const Item = ({ match }) => {
  const [items] = useContext(StoreContext);

  const selectedItem = items.filter(
    (item) => item.id === parseInt(match.params.id)
  )[0];

  return (
    <React.Fragment>
      <Link to={`/store`} className="item-link">
        <h2>&lt;- </h2>
      </Link>
      <h3>ID: {selectedItem.id}</h3>
      <h3>NAME: {selectedItem.name}</h3>
      <h3>PRICE: {selectedItem.price}</h3>
    </React.Fragment>
  );
};

export default Item;
