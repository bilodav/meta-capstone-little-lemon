import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div className="footer-logo">
        <img src="logo.svg" alt="Little Lemon Logo" />
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
    </footer>
  );
}

export default Footer;
