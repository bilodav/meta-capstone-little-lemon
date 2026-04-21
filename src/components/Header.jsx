import logo from "../logo.svg"; // 👈 Import your logo
import Nav from "./Nav"; // 👈 Import Nav into Header

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="header-logo" />
      <Nav /> {/* 👈 Nav sits inside Header */}
    </header>
  );
}

export default Header;
