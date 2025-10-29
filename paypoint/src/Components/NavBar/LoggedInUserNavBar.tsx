import styles from "./LoggedInUserNavBar.module.css";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface User {
  name: string;
  role: string;
  avatar: string;
  phone: string;
}

interface LoggedInUserNavBarProps {
  user?: User | null;
  onLogout: () => void;
}

interface NavigationItem {
  name: string;
  path: string;
  icon: string;
}

const LoggedInUserNavBar = ({
  user = null,
  onLogout,
}: LoggedInUserNavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultUser: User = {
    name: "Kwame Mensah",
    role: "Property Owner",
    avatar: "👤",
    phone: "+233 XX XXX XXXX",
  };

  const currentUser = user || defaultUser;

  const navigation: NavigationItem[] = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Find Property", path: "/find-property", icon: "🔍" },
    { name: "My Properties", path: "/properties", icon: "🏠" },
    { name: "Bills", path: "/bills", icon: "🧾" },
    { name: "History", path: "/history", icon: "📈" },
  ];

  const isActivePath = (path: string): boolean => {
    return location.pathname === path;
  };

  const handleLogoutClick = (): void => {
    onLogout();
    navigate("/");
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.brandSection}>
          <Link to="/dashboard" className={styles.logo}>
            <span className={styles.logoIcon}>🏠</span>
            <span className={styles.logoText}>RatePoint</span>
          </Link>
          <div className={styles.brandTagline}>Property Rates</div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navSection}>
          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${styles.navLink} ${
                  isActivePath(item.path) ? styles.active : ""
                }`}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* User Section */}
        <div className={styles.userSection}>
          {/* Notification Bell */}
          <div className={styles.notificationWrapper}>
            <button className={styles.notificationButton}>
              <span className={styles.notificationIcon}>🔔</span>
              <span className={styles.notificationBadge}>3</span>
            </button>
          </div>

          {/* User Avatar & Menu */}
          <div className={styles.userMenuWrapper}>
            <button
              className={styles.userButton}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <div className={styles.userAvatar}>{currentUser.avatar}</div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{currentUser.name}</span>
                <span className={styles.userRole}>{currentUser.role}</span>
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
                  <div className={styles.dropdownAvatar}>
                    {currentUser.avatar}
                  </div>
                  <div className={styles.dropdownUserInfo}>
                    <div className={styles.dropdownName}>
                      {currentUser.name}
                    </div>
                    <div className={styles.dropdownRole}>
                      {currentUser.role}
                    </div>
                    <div className={styles.dropdownPhone}>
                      {currentUser.phone}
                    </div>
                  </div>
                </div>

                <div className={styles.dropdownDivider}></div>

                <div className={styles.dropdownItems}>
                  <Link
                    to="/profile"
                    className={styles.dropdownItem}
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>👤</span>
                    <span className={styles.dropdownText}>My Profile</span>
                  </Link>

                  <Link
                    to="/receipts"
                    className={styles.dropdownItem}
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>🧾</span>
                    <span className={styles.dropdownText}>
                      Payment Receipts
                    </span>
                  </Link>

                  <Link
                    to="/properties"
                    className={styles.dropdownItem}
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>🏠</span>
                    <span className={styles.dropdownText}>My Properties</span>
                  </Link>
                </div>

                <div className={styles.dropdownDivider}></div>

                <div className={styles.dropdownItems}>
                  <Link
                    to="/support"
                    className={styles.dropdownItem}
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>💬</span>
                    <span className={styles.dropdownText}>Help & Support</span>
                  </Link>

                  <Link
                    to="/settings"
                    className={styles.dropdownItem}
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <span className={styles.dropdownIcon}>⚙️</span>
                    <span className={styles.dropdownText}>Settings</span>
                  </Link>
                </div>

                <div className={styles.dropdownDivider}></div>

                <button
                  className={styles.logoutButton}
                  onClick={handleLogoutClick}
                >
                  <span className={styles.dropdownIcon}>🚪</span>
                  <span className={styles.dropdownText}>Sign Out</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`${styles.hamburger} ${
                isMenuOpen ? styles.active : ""
              }`}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileMenuContent}>
          {/* Mobile User Info */}
          <div className={styles.mobileUserSection}>
            <div className={styles.mobileUserAvatar}>{currentUser.avatar}</div>
            <div className={styles.mobileUserInfo}>
              <div className={styles.mobileUserName}>{currentUser.name}</div>
              <div className={styles.mobileUserRole}>{currentUser.role}</div>
              <div className={styles.mobileUserPhone}>{currentUser.phone}</div>
            </div>
          </div>

          <div className={styles.mobileNavLinks}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${styles.mobileNavLink} ${
                  isActivePath(item.path) ? styles.mobileActive : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={styles.mobileNavIcon}>{item.icon}</span>
                <span className={styles.mobileNavText}>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className={styles.mobileMenuDivider}></div>

          <div className={styles.mobileSecondaryLinks}>
            <Link
              to="/profile"
              className={styles.mobileSecondaryLink}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.mobileLinkIcon}>👤</span>
              My Profile
            </Link>
            <Link
              to="/receipts"
              className={styles.mobileSecondaryLink}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.mobileLinkIcon}>🧾</span>
              Payment Receipts
            </Link>
            <Link
              to="/support"
              className={styles.mobileSecondaryLink}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className={styles.mobileLinkIcon}>💬</span>
              Help & Support
            </Link>
          </div>

          <div className={styles.mobileMenuActions}>
            <button
              className={styles.mobileLogoutButton}
              onClick={handleLogoutClick}
            >
              <span className={styles.mobileLinkIcon}>🚪</span>
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default LoggedInUserNavBar;
