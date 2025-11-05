import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MunicipalAuth.module.css";

const MunicipalAuth = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    municipality: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call - replace with actual authentication service
      console.log("Municipal login attempt:", formData);

      // TODO: Integrate with actual authentication API
      // const response = await authService.municipalLogin(formData);

      // For demo purposes - simulate successful login
      setTimeout(() => {
        setIsLoading(false);
        // Redirect to municipal dashboard
        navigate("/municipalities/dashboard");
      }, 1500);
    } catch (err) {
      setIsLoading(false);
      setError("Invalid credentials. Please check your email and password.");
    }
  };

  const handleForgotPassword = () => {
    // Navigate to password reset flow
    navigate("/auth/password-reset", { state: { userType: "municipal" } });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.backButton}
          onClick={() => navigate("/auth/role-selection")}
        >
          ← Back
        </div>
        <h1 className={styles.title}>Municipal Staff Portal</h1>
        <p className={styles.subtitle}>
          Access your municipal administration dashboard
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
            Municipal Assembly
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
          <label htmlFor="email" className={styles.label}>
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="your.name@assembly.gov.gh"
            required
          />
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

        <div className={styles.rememberForgot}>
          <label className={styles.rememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
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
            "Sign In to Portal"
          )}
        </button>
      </form>

      <div className={styles.footer}>
        <div className={styles.helpSection}>
          <h3 className={styles.helpTitle}>Need Help Accessing?</h3>
          <p className={styles.helpText}>
            Contact your Municipal IT Administrator or System Supervisor to get
            your login credentials.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <span>support@ratepoint.gov.gh</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>+233 24 123 4567</span>
            </div>
          </div>
        </div>

        <div className={styles.roleHint}>
          <span>Not a municipal staff? </span>
          <button
            className={styles.switchRole}
            onClick={() => navigate("/auth/role-selection")}
          >
            Switch role
          </button>
        </div>
      </div>
    </div>
  );
};

export default MunicipalAuth;
