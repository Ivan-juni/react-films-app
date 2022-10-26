import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import styles from "./Header.module.scss";

const Header = () => {
  const { favorite_films } = useAppSelector((state) => state.film);

  return (
    <div className={styles.wrapper}>
      <nav className="navbar navbar-expand-lg">
        <NavLink className={styles.brand} to="/home">
          FILMS APP
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id={styles.customButtonToggler}
        >
          <span
            className="navbar-toggler-icon"
            id={styles.customToggler}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={styles.nav__items} id={styles.navItems}>
            <li className={styles.nav__item}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.nav__link
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.nav__link
                }
                to="/Favorite"
              >
                <span>Favorite films</span>
                <span className={styles.total}> [{favorite_films.length}]</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
