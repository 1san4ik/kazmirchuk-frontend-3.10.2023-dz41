import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="widget">
      <h3 className="widget-title">Категорії</h3>
      <ul className="widget-list">
                <li><NavLink to="javascript">JavaScript</NavLink></li>
                <li><NavLink to="react">React</NavLink></li>
                <li><NavLink to="typescript">TypeScript</NavLink></li>
                <li><NavLink to="nodejs">Node JS</NavLink></li>
            </ul>
    </div>
  );
}

export default Navigation;
