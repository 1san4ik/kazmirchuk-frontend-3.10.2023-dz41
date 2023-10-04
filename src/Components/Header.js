import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="wrap-logo">
        <NavLink to="/" className="logo">
          <img src="./image/react.png" alt="logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <NavLink to="/">Головна</NavLink>
          <NavLink to="contacts">Контакти</NavLink>
          <NavLink to="about">Про нас</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
