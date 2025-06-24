import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";

import styles from "./Navbar.module.css";

import NavLinks from "./NavLinks";
import Logo from "@/components/Logo/Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <header>
        <Link href="/">
          <Logo white />
        </Link>
      </header>

      <input
        type="checkbox"
        className={styles.navCheck}
        id="nav_check"
        hidden
      />

      <div className={styles.navLinks}>
        <div className={styles.navLinksHeader}>
          <Link href="/">
            <div className={styles.navLinkLogo}>
              <Logo />
            </div>
          </Link>

          <label htmlFor="nav_check">
            <IoCloseOutline />
          </label>
        </div>

        <ul>
          <NavLinks />
        </ul>
      </div>

      <label htmlFor="nav_check" className={styles.hamburguer}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </nav>
  );
};

export default Navbar;
