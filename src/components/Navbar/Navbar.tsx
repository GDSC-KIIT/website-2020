import React from "react";
import styles from "./navbar.module.css";
import { FaAlignJustify } from "react-icons/fa";
const Navbar = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className= {styles.navbar}>
    <div className={styles.container}>
      <div className={styles.navbar__container}>
        <ul className={styles.navbar__left}>
          <div className={styles.navbar__left__logo}>
            <img src="https://avatars1.githubusercontent.com/u/58649082?s=200&v=" alt="logo" />
          </div>
        </ul>
        {state ? (
          <ul className={styles.navbar__right}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>

            <li>
              <a href="">Mentors</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>

          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
    <div className={styles.toggle} onClick={() => setState(!state)}>
      <FaAlignJustify />
    </div>
  </nav>
  );
}
export default Navbar;
