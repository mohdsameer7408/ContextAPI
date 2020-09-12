import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../storeContext";

const NavBar = () => {
  const [items] = useContext(StoreContext);
  return (
    <nav>
      <Link to="/" className="links">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-link">
        <Link to="/store" className="links">
          <li>Store: {items.length}</li>
        </Link>
        <Link to="/about" className="links">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
