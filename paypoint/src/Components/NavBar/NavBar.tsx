import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const user = {
    name: "Kwame Mensah",
    role: "Property Owner",
    avatar: "👤",
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "My Properties", href: "/properties", current: false },
    { name: "Bills & Payments", href: "/bills", current: false },
    { name: "Payment History", href: "/history", current: false },
    { name: "Help & Support", href: "/support", current: false },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo and Brand */}
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏠</span>
            <span className={styles.logoText}>RatePoint</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navSection}>
          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${
                  item.current ? styles.active : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* User Section */}
        <div className={styles.userSection}>
          {/* Notifications */}
          <button className={styles.iconButton}>
            <span className={styles.notificationIcon}>🔔</span>
            <span className={styles.notificationBadge}>3</span>
          </button>

          {/* User Menu */}
          <div className={styles.userMenu}>
            <button
              className={styles.userButton}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <span className={styles.userAvatar}>{user.avatar}</span>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{user.name}</span>
                <span className={styles.userRole}>{user.role}</span>
              </div>
              <span
                className={`${styles.chevron} ${
                  isUserMenuOpen ? styles.rotate : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <span className={styles.dropdownName}>{user.name}</span>
                  <span className={styles.dropdownRole}>{user.role}</span>
                </div>

                <div className={styles.dropdownDivider}></div>

                <a href="/profile" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>👤</span>
                  My Profile
                </a>

                <a href="/settings" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>⚙️</span>
                  Settings
                </a>

                <a href="/receipts" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>🧾</span>
                  My Receipts
                </a>

                <div className={styles.dropdownDivider}></div>

                <a href="/support" className={styles.dropdownItem}>
                  <span className={styles.dropdownIcon}>💬</span>
                  Help & Support
                </a>

                <div className={styles.dropdownDivider}></div>

                <button className={styles.logoutButton}>
                  <span className={styles.dropdownIcon}>🚪</span>
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.hamburger}>
              <span
                className={`${styles.hamburgerLine} ${
                  isMenuOpen ? styles.active : ""
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  isMenuOpen ? styles.active : ""
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  isMenuOpen ? styles.active : ""
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            {/* Mobile User Info */}
            <div className={styles.mobileUserInfo}>
              <span className={styles.mobileUserAvatar}>{user.avatar}</span>
              <div>
                <div className={styles.mobileUserName}>{user.name}</div>
                <div className={styles.mobileUserRole}>{user.role}</div>
              </div>
            </div>

            <div className={styles.mobileNavLinks}>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    item.current ? styles.mobileActive : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className={styles.mobileMenuDivider}></div>

            <div className={styles.mobileSecondaryLinks}>
              <a href="/profile" className={styles.mobileSecondaryLink}>
                <span className={styles.mobileLinkIcon}>👤</span>
                My Profile
              </a>
              <a href="/settings" className={styles.mobileSecondaryLink}>
                <span className={styles.mobileLinkIcon}>⚙️</span>
                Settings
              </a>
              <a href="/receipts" className={styles.mobileSecondaryLink}>
                <span className={styles.mobileLinkIcon}>🧾</span>
                My Receipts
              </a>
              <a href="/support" className={styles.mobileSecondaryLink}>
                <span className={styles.mobileLinkIcon}>💬</span>
                Help & Support
              </a>
            </div>

            <div className={styles.mobileMenuDivider}></div>

            <button className={styles.mobileLogoutButton}>
              <span className={styles.mobileLinkIcon}>🚪</span>
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
