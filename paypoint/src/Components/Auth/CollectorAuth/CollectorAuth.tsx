import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CollectorAuth.module.css";

const CollectorAuth = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    municipality: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showOfflineMode, setShowOfflineMode] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call for collector authentication
      console.log("Collector login attempt:", formData);

      // TODO: Integrate with actual collector authentication API
      // const response = await authService.collectorLogin(formData);

      // For demo - simulate successful login
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to collector dashboard
        navigate("/collectors/dashboard");
      }, 1500);
    } catch {
      // Fixed: Removed unused 'err' parameter
      setIsLoading(false);
      setError("Invalid credentials. Please check your username and password.");
    }
  };

  const handleOfflineMode = () => {
    setShowOfflineMode(true);
    // TODO: Implement offline mode logic
    console.log("Offline mode activated for collector");
  };

  const handleForgotPassword = () => {
    navigate("/auth/password-reset", { state: { userType: "collector" } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.backButton}
          onClick={() => navigate("/auth/role-selection")}
        >
          ← Back
        </button>
        <h1 className={styles.title}>Field Collector Login</h1>
        <p className={styles.subtitle}>
          Access your field collection tools and property registration
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {error && (
          <div className={styles.errorAlert}>
            <span className={styles.errorIcon}>⚠️</span>
            {error}
          </div>
        )}

        <div className={styles.inputGroup}>
          <label htmlFor="municipality" className={styles.label}>
            Assigned Municipality
          </label>
          <select
            id="municipality"
            name="municipality"
            value={formData.municipality}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select your municipality</option>
            <option value="accra-metropolitan">
              Accra Metropolitan Assembly
            </option>
            <option value="kumasi-metropolitan">
              Kumasi Metropolitan Assembly
            </option>
            <option value="tema-metropolitan">
              Tema Metropolitan Assembly
            </option>
            <option value="takoradi-metropolitan">
              Takoradi Metropolitan Assembly
            </option>
            <option value="cape-coast-metropolitan">
              Cape Coast Metropolitan Assembly
            </option>
            <option value="tamale-metropolitan">
              Tamale Metropolitan Assembly
            </option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Collector ID / Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your collector ID"
            required
          />
          <div className={styles.inputHint}>
            Provided by your Municipal Revenue Officer
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>📱</span>
            <span>Offline Property Registration</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>💰</span>
            <span>Digital Payment Collection</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🎯</span>
            <span>Daily Performance Tracking</span>
          </div>
        </div>

        <div className={styles.rememberForgot}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            <span>Keep me logged in</span>
          </label>
          <button
            type="button"
            className={styles.forgotPassword}
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className={styles.spinner}></div>
              Signing In...
            </>
          ) : (
            "Access Collector App"
          )}
        </button>

        <div className={styles.offlineSection}>
          <div className={styles.offlineDivider}>
            <span>Or</span>
          </div>
          <button
            type="button"
            className={styles.offlineButton}
            onClick={handleOfflineMode}
          >
            <span className={styles.offlineIcon}>📶</span>
            Continue in Offline Mode
          </button>
          <div className={styles.offlineHint}>
            Limited functionality available without internet connection
          </div>
        </div>
      </form>

      <div className={styles.footer}>
        <div className={styles.helpSection}>
          <h3 className={styles.helpTitle}>First Time Collector?</h3>
          <p className={styles.helpText}>
            Your Municipal Administrator must create your collector account
            before you can login. Contact your supervisor if you haven't
            received your credentials.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>👨‍💼</span>
              <span>Contact your Municipal Revenue Officer</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>Assembly Help Desk: +233 24 123 4567</span>
            </div>
          </div>
        </div>

        <div className={styles.roleHint}>
          <span>Not a field collector? </span>
          <button
            type="button"
            className={styles.switchRole}
            onClick={() => navigate("/auth/role-selection")}
          >
            Switch role
          </button>
        </div>
      </div>

      {/* Offline Mode Modal */}
      {showOfflineMode && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Offline Mode Activated</h3>
            <p>
              You can now register properties and issue bills without internet
              connection. Your data will sync automatically when you're back
              online.
            </p>
            <div className={styles.modalFeatures}>
              <div className={styles.modalFeature}>
                <span className={styles.modalIcon}>🏠</span>
                <span>Property Registration</span>
              </div>
              <div className={styles.modalFeature}>
                <span className={styles.modalIcon}>🧾</span>
                <span>Bill Issuance</span>
              </div>
              <div className={styles.modalFeature}>
                <span className={styles.modalIcon}>💵</span>
                <span>Cash Collection Recording</span>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.modalSecondary}
                onClick={() => setShowOfflineMode(false)}
              >
                Go Back
              </button>
              <button
                type="button"
                className={styles.modalPrimary}
                onClick={() => navigate("/collectors/dashboard?offline=true")}
              >
                Continue Offline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectorAuth;
