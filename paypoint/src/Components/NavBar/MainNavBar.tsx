import { useState, useEffect } from "react";
import PublicNavBar from "./PublicNavBar";
import styles from "./MainNavBar.module.css";
import AuthenticatedNavBar from "./AuthenticatedNavBar";

// Define TypeScript interfaces
interface User {
  name: string;
  role: string;
  avatar: string;
  phone: string;
  dashboard: string;
}

const MainNavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Simulate authentication check
  const checkAuthStatus = (): void => {
    // Check if user data exists in localStorage
    const userData = localStorage.getItem("ratepoint_user");
    const token = localStorage.getItem("ratepoint_token");

    console.log("🔍 Auth Check:", { userData, token }); // DEBUG

    if (userData && token) {
      try {
        const parsedUser: User = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
        console.log("✅ User authenticated:", parsedUser); // DEBUG
      } catch (error) {
        console.error("Error parsing user data:", error);
        clearAuthData();
      }
    } else {
      console.log("❌ No user data found"); // DEBUG
    }

    setIsLoading(false);
  };

  // Clear authentication data
  const clearAuthData = (): void => {
    localStorage.removeItem("ratepoint_token");
    localStorage.removeItem("ratepoint_user");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Handle user login with role-specific data
  const handleLogin = (
    userData: User,
    token: string = "mock-jwt-token"
  ): void => {
    localStorage.setItem("ratepoint_token", token);
    localStorage.setItem("ratepoint_user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    console.log("🔐 User logged in:", userData); // DEBUG
  };

  // Handle user logout
  const handleLogout = (): void => {
    clearAuthData();
    console.log("🚪 User logged out"); // DEBUG
    // Optional: Redirect to home page after logout
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    console.log("⏳ Loading..."); // DEBUG
    return (
      <nav className={styles.loadingNavbar}>
        <div className={styles.loadingContainer}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏠</span>
            <span className={styles.logoText}>RatePoint</span>
          </div>
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
          </div>
        </div>
      </nav>
    );
  }

  console.log("🎯 Rendering:", { isAuthenticated, user }); // DEBUG

  // Return appropriate navbar based on authentication status
  return (
    <>
      {isAuthenticated && user ? (
        <>
          <AuthenticatedNavBar user={user} onLogout={handleLogout} />
          <div style={{background: 'red', color: 'white', padding: '10px', textAlign: 'center'}}>
            DEBUG: Authenticated Navbar Showing
          </div>
        </>
      ) : (
        <>
          <PublicNavBar onLogin={handleLogin} />
          <div style={{background: 'blue', color: 'white', padding: '10px', textAlign: 'center'}}>
            DEBUG: Public Navbar Showing
          </div>
        </>
      )}
    </>
  );
};

export default MainNavBar;