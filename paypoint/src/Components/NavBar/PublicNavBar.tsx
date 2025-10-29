import styles from "./PublicNavBar.module.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  highlight?: boolean;
  type: "link";
}

interface PublicNavBarProps {
  onLogin: (user: User) => void;
}

const PublicNavBar = ({ onLogin }: PublicNavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showAppDownloads, setShowAppDownloads] = useState<boolean>(false);
  const [showRoleMenu, setShowRoleMenu] = useState<boolean>(false);
  const navigate = useNavigate();

  const downloadRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  // App download links
  const appDownloads = {
    ios: "https://apps.apple.com/gh/app/ratepoint/id123456789",
    android: "https://play.google.com/store/apps/details?id=com.ratepoint.app",
  };

  // User roles for demo login
  const userRoles: Record<string, User> = {
    "Property Owner": {
      name: "Kwame Mensah",
      role: "Property Owner",
      avatar: "👤",
      phone: "+233 XX XXX XXXX",
      dashboard: "/dashboard",
    },
    "Rate Collector": {
      name: "Ama Gyamfi",
      role: "Rate Collector",
      avatar: "📱",
      phone: "+233 XX XXX XXXX",
      dashboard: "/collector-dashboard",
    },
    "Municipal Staff": {
      name: "Municipal Assembly",
      role: "Municipal Administrator",
      avatar: "🏢",
      phone: "+233 XX XXX XXXX",
      dashboard: "/admin",
    },
  };

  const navigation: NavigationItem[] = [
    { name: "Pay Bill", href: "/find-property", highlight: true, type: "link" },
    { name: "Property Owners", href: "/find-property", type: "link" },
    { name: "Collectors", href: "/collectors", type: "link" },
    { name: "Municipalities", href: "/municipalities", type: "link" },
    { name: "Support", href: "/support", type: "link" },
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        downloadRef.current &&
        !downloadRef.current.contains(event.target as Node)
      ) {
        setShowAppDownloads(false);
      }
      if (
        loginRef.current &&
        !loginRef.current.contains(event.target as Node)
      ) {
        setShowRoleMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRoleLogin = (role: string): void => {
    const userData = userRoles[role];
    if (onLogin) {
      onLogin(userData);
    }
    navigate(userData.dashboard);
    setShowRoleMenu(false);
    setIsMenuOpen(false);
  };

  const openAppStore = (platform: "ios" | "android"): void => {
    window.open(appDownloads[platform], "_blank");
    setShowAppDownloads(false);
  };

  const toggleAppDownloads = (): void => {
    setShowAppDownloads(!showAppDownloads);
    setShowRoleMenu(false);
  };

  const toggleRoleMenu = (): void => {
    setShowRoleMenu(!showRoleMenu);
    setShowAppDownloads(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.brandSection}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}>🏠</span>
            <span className={styles.logoText}>RatePoint</span>
          </Link>
          <div className={styles.brandTagline}>Ghana Property Rates</div>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navSection}>
          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${styles.navLink} ${
                  item.highlight ? styles.highlighted : ""
                }`}
              >
                {item.name}
                {item.highlight && (
                  <span className={styles.highlightDot}></span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          {/* App Download Button with Dropdown */}
          <div className={styles.downloadContainer} ref={downloadRef}>
            <button
              className={styles.downloadButton}
              onClick={toggleAppDownloads}
            >
              <span className={styles.downloadIcon}>📱</span>
              Get App
            </button>

            {/* App Download Dropdown */}
            {showAppDownloads && (
              <div className={styles.downloadDropdown}>
                <button
                  className={styles.downloadOption}
                  onClick={() => openAppStore("ios")}
                >
                  <span className={styles.storeIcon}></span>
                  iOS App Store
                </button>
                <button
                  className={styles.downloadOption}
                  onClick={() => openAppStore("android")}
                >
                  <span className={styles.storeIcon}>🤖</span>
                  Google Play
                </button>
              </div>
            )}
          </div>

          {/* Role Selection Dropdown */}
          <div className={styles.loginContainer} ref={loginRef}>
            <button className={styles.loginButton} onClick={toggleRoleMenu}>
              Sign In ▽
            </button>
            {showRoleMenu && (
              <div className={styles.loginDropdown}>
                <div className={styles.loginHeader}>Sign In As:</div>
                <button
                  className={styles.roleOption}
                  onClick={() => handleRoleLogin("Property Owner")}
                >
                  <span className={styles.roleIcon}>👤</span>
                  Property Owner
                </button>
                <button
                  className={styles.roleOption}
                  onClick={() => handleRoleLogin("Rate Collector")}
                >
                  <span className={styles.roleIcon}>📱</span>
                  Rate Collector
                </button>
                <button
                  className={styles.roleOption}
                  onClick={() => handleRoleLogin("Municipal Staff")}
                >
                  <span className={styles.roleIcon}>🏢</span>
                  Municipal Staff
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Mobile Navigation Menu */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div className={styles.mobileMenuContent}>
          {/* Mobile Header */}
          <div className={styles.mobileHeader}>
            <div className={styles.mobileLogo}>
              <span className={styles.mobileLogoIcon}>🏠</span>
              <span className={styles.mobileLogoText}>RatePoint</span>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className={styles.closeIcon}>×</span>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className={styles.mobileNavLinks}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${styles.mobileNavLink} ${
                  item.highlight ? styles.mobileHighlighted : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {item.highlight && (
                  <span className={styles.mobileHighlightDot}></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile App Downloads */}
          <div className={styles.mobileAppSection}>
            <h4 className={styles.mobileSectionTitle}>Download Mobile App</h4>
            <button
              className={styles.mobileStoreButton}
              onClick={() => openAppStore("ios")}
            >
              <span className={styles.mobileStoreIcon}></span>
              <div className={styles.storeText}>
                <div className={styles.storeSmall}>Download on the</div>
                <div className={styles.storeLarge}>App Store</div>
              </div>
            </button>
            <button
              className={styles.mobileStoreButton}
              onClick={() => openAppStore("android")}
            >
              <span className={styles.mobileStoreIcon}>🤖</span>
              <div className={styles.storeText}>
                <div className={styles.storeSmall}>Get it on</div>
                <div className={styles.storeLarge}>Google Play</div>
              </div>
            </button>
          </div>

          {/* Mobile Login Options */}
          <div className={styles.mobileLoginSection}>
            <h4 className={styles.mobileSectionTitle}>Sign In As</h4>
            <button
              className={styles.mobileRoleButton}
              onClick={() => handleRoleLogin("Property Owner")}
            >
              <span className={styles.mobileRoleIcon}>👤</span>
              Property Owner
            </button>
            <button
              className={styles.mobileRoleButton}
              onClick={() => handleRoleLogin("Rate Collector")}
            >
              <span className={styles.mobileRoleIcon}>📱</span>
              Rate Collector
            </button>
            <button
              className={styles.mobileRoleButton}
              onClick={() => handleRoleLogin("Municipal Staff")}
            >
              <span className={styles.mobileRoleIcon}>🏢</span>
              Municipal Staff
            </button>
          </div>

          {/* Mobile Contact Section */}
          <div className={styles.mobileContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              support@ratepoint.gov.gh
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              0302 123 4567
            </div>
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

export default PublicNavBar;
