import { Link } from "react-router-dom";
import greenLogo from "../assets/green-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={greenLogo} alt="Little Lemon Logo" />
        </div>

        {/* Nav Links */}
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Address</h3>
          <p>123 Main Street</p>
          <p>Chicago, IL 60601</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h3>Address</h3>
          <p>Phone number</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
