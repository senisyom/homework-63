import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-sm">
        <span className="navbar-brand">Мой блог</span>

        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/posts/add" className="nav-link">
              Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" className="nav-link">
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ToolBar;
