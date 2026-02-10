import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";

export function Navbar() {
  return (
    <>
      <nav>
        <ul className={style.navbarStyle}>
          <li>
            <NavLink to="/ByDate"> By Date</NavLink>
            <NavLink to="/Since"> Since </NavLink>
            <NavLink to="/ToDay"> To Day </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
