import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"}>
        <img className={styles.logo} src={Logo} alt={Logo}></img>
      </Link>
      <div className={styles.links}>
        <NavLink className={styles.search} to={"/search"}>
          Поиск Вакансий
        </NavLink>
        <NavLink className={styles.favorite} to={"/favorite"}>
          Избранное
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
