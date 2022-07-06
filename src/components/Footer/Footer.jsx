import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        <ul>
          <li className="heading">Shop</li>
          <li>
            <a href="#">Shop Men</a>
          </li>
          <li>
            <a href="#">Shop Women</a>
          </li>
        </ul>
        <ul>
          <li className="heading">Company</li>
          <li>
            <a href="#">Home Page</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Track My Orders.</a>
          </li>
        </ul>
        <ul>
          <li className="heading">Help</li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Refund Policy</a>
          </li>
          <li>
            <a href="#">Shipping Policy</a>
          </li>
          <li>
            <a href="#">Terms of Services.</a>
          </li>
        </ul>
      </div>
      <div className="newsletter">
        <h4 className="newsletter_heading">NewsLetter Sign Up</h4>
        <form>
          <input type="text" placeholder="enter your email address" />
          <button className="purple-btn">Submit</button>
        </form>
        <p>Sign up to receive a 10% discount on your next order.</p>
        <div className="socail-icons">
          <BsFacebook className="icons__newsletter" />
          <AiFillInstagram className="icons__newsletter" />
          <AiFillTwitterCircle className="icons__newsletter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
