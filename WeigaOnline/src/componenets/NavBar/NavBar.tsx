import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo/Brand */}
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <h2>Weiga Traditional Area</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/news" className={styles.navLink} onClick={closeMenu}>
              News & Activities
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/gallery" className={styles.navLink} onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/blog" className={styles.navLink} onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenu} onClick={toggleMenu}>
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.change : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.change : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.change : ""}`}
          ></span>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ""}`}
        >
          <ul className={styles.mobileNavMenu}>
            <li className={styles.mobileNavItem}>
              <Link to="/" className={styles.mobileNavLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/about"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/news"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                News & Activities
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/gallery"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Gallery
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/blog"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/contact"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
