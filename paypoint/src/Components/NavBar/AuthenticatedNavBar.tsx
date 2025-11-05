import styles from "./AuthenticatedNavBar.module.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Define TypeScript interfaces
interface User {
  name: string;
  role: string;
  avatar: string;
  phone: string;
  dashboard: string;
}

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  icon: string;
}

interface AuthenticatedNavBarProps {
  user: User;
  onLogout: () => void;
}

const AuthenticatedNavBar = ({ user, onLogout }: AuthenticatedNavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentUser: User = user;

  // SIMPLIFIED: Only use routes that actually exist
  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "/dashboard", current: true, icon: "📊" },
    { name: "Find Property", href: "/find-property", current: false, icon: "🔍" },
    { name: "Collectors", href: "/collectors", current: false, icon: "📱" },
    { name: "Municipalities", href: "/municipalities", current: false, icon: "🏢" },
    { name: "Support", href: "/support", current: false, icon: "💬" },
  ];

  const handleLogoutClick = (): void => {
    onLogout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  const toggleUserMenu = (): void => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleMobileMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
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
                to={item.href}
                className={`${styles.navLink} ${
                  item.current ? styles.active : ""
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
          <div className={styles.userMenuWrapper} ref={userMenuRef}>
            <button className={styles.userButton} onClick={toggleUserMenu}>
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

            {/* Dropdown Menu - SIMPLIFIED: Only use existing routes */}
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
                  <Link to="/find-property" className={styles.dropdownItem}>
                    <span className={styles.dropdownIcon}>🔍</span>
                    <span className={styles.dropdownText}>Find Property</span>
                  </Link>

                  <Link to="/support" className={styles.dropdownItem}>
                    <span className={styles.dropdownIcon}>💬</span>
                    <span className={styles.dropdownText}>Help & Support</span>
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
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
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

      {/* Mobile Navigation Menu - SIMPLIFIED */}
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
                to={item.href}
                className={`${styles.mobileNavLink} ${
                  item.current ? styles.mobileActive : ""
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
            <Link to="/find-property" className={styles.mobileSecondaryLink}>
              <span className={styles.mobileLinkIcon}>🔍</span>
              Find Property
            </Link>
            <Link to="/support" className={styles.mobileSecondaryLink}>
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

export default AuthenticatedNavBar;