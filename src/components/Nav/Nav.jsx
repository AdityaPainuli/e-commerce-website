import "./nav.css";
import Logo from "../../media/logo.png";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      {/* <ul className="navbar__gender">
        <li>
          <a href="#">Shop Men</a>
        </li>
        <li>
          <a href="#">Shop Women</a>
        </li>
      </ul> */}
      <div className="navbar__logo">
        <h4 className="logo">Overlays</h4>
      </div>
      <div className="navbar__icons">
        <BsSearch className="icon" />
        <BiUser className="icon" />
        <AiOutlineShoppingCart className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
