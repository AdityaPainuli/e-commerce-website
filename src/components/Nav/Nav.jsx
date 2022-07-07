import "./nav.css";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = ({ cart }) => {
  return (
    <nav>
      <div className="navbar__logo">
        <h4 className="logo">Overlays</h4>
      </div>

      <div className="navbar__icons">
        <Link to="/login-signup">
          <BiUser className="icon" />
        </Link>
        <Link to="/cart" className="cart-container">
          <AiOutlineShoppingCart className="icon container-icon" />
          <h6>{cart.length}</h6>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
