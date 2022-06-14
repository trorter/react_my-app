import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to={"/profile"}
                 className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={"/dialogs"}
                 className={props => props.isActive ? `${s.item} ${s.activeLink}` : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a href={"blank"}>News</a>
      </div>
      <div className={s.item}>
        <a href={"blank"}>Music</a>
      </div>
      <div className={s.item}>
        <a href={"blank"}>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;