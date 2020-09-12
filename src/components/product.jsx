import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <React.Fragment>
      <Link to={`/store/${item.id}`} className="item-link">
        <h4>{item.name}</h4>
      </Link>

      <hr />
    </React.Fragment>
  );
};

export default Product;
