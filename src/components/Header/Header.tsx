import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import styles from './Header.module.scss'
import { useState } from 'react'

const Header = () => {
  const { favorite_films } = useAppSelector((state) => state.film)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current)
  }

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <NavLink className={styles.brand} to='/home'>
          FILMS APP
        </NavLink>
        <div
          className={
            isActive
              ? `${styles.burger__button} ${styles._active}`
              : `${styles.burger__button}`
          }
          onClick={handleClick}
        >
          <span></span>
        </div>

        <div
          className={
            isActive
              ? `${styles.nav__body} ${styles._active}`
              : `${styles.nav__body}`
          }
          id='navbarNav'
        >
          <ul className={styles.nav__items} id={styles.navItems}>
            <li className={styles.nav__item}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.nav__link
                }
                to='/home'
              >
                Home
              </NavLink>
            </li>
            <li className={styles.nav__item}>
              <NavLink
                className={(navData) =>
                  navData.isActive ? styles.active : styles.nav__link
                }
                to='/Favorite'
              >
                <span>Favorite films</span>
                <span className={styles.total}> [{favorite_films.length}]</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
