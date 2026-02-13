import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <>
      <nav className={style.navbarStyle}>
        <ul>
          <li>
            <NavLink to="/ByDate" className={({ isActive }) => (isActive ? style.active : "")}>
              {" "}
              By Date
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? style.active : "")}>
              {" "}
              Today{" "}
            </NavLink>
          </li>
          <li>
            <NavLink to="/Since" className={({ isActive }) => (isActive ? style.active : "")}>
              {" "}
              Since{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
