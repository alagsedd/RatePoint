import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyOwnerAuth.module.css";

const PropertyOwnerAuth = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    ghanaCardId: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Format phone number as user types
    if (name === "phoneNumber") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formattedPhone,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value.toUpperCase(), // Ghana Card IDs are usually uppercase
      });
    }

    if (error) setError("");
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");

    // Format as Ghanaian phone number: +233 XX XXX XXXX
    if (cleaned.length <= 3) {
      return `+${cleaned}`;
    } else if (cleaned.length <= 6) {
      return `+${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
    } else if (cleaned.length <= 9) {
      return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    } else {
      return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9, 13)}`;
    }
  };

  const validateGhanaCard = (cardId: string) => {
    // Basic Ghana Card format validation: GHA-XXX-XXXX-X
    const ghanaCardRegex = /^GHA-\d{3}-\d{4}-\d{1}$/;
    return ghanaCardRegex.test(cardId);
  };

  const validatePhoneNumber = (phone: string) => {
    // Validate Ghanaian phone number format
    const phoneRegex = /^\+233 \d{2} \d{3} \d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate inputs
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setError("Please enter a valid Ghanaian phone number (e.g., +233 24 123 4567)");
      setIsLoading(false);
      return;
    }

    if (!validateGhanaCard(formData.ghanaCardId)) {
      setError("Please enter a valid Ghana Card ID (e.g., GHA-123-4567-8)");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call for property owner authentication
      console.log("Property owner auth attempt:", formData);

      // TODO: Integrate with actual authentication API
      // const response = await authService.propertyOwnerAuth(formData);

      // For demo - simulate successful verification
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to OTP verification with user data
        navigate("/auth/otp-verification", {
          state: {
            phoneNumber: formData.phoneNumber,
            ghanaCardId: formData.ghanaCardId,
            isSignUp,
          },
        });
      }, 1500);
    } catch {
      // Removed unused 'err' parameter to fix ESLint warning
      setIsLoading(false);
      setError("Verification failed. Please check your details and try again.");
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setFormData({ phoneNumber: "", ghanaCardId: "" });
  };

  const handleSupportClick = () => {
    navigate("/support");
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
        <h1 className={styles.title}>
          {isSignUp ? "Create Account" : "Property Owner Login"}
        </h1>
        <p className={styles.subtitle}>
          {isSignUp
            ? "Register to view and pay your property rates"
            : "Access your property and payment history"}
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
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
            placeholder="+233 24 123 4567"
            required
            maxLength={18} // +233 XX XXX XXXX format
          />
          <div className={styles.inputHint}>
            Enter your registered Ghanaian mobile number
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="ghanaCardId" className={styles.label}>
            Ghana Card ID
          </label>
          <input
            type="text"
            id="ghanaCardId"
            name="ghanaCardId"
            value={formData.ghanaCardId}
            onChange={handleChange}
            className={styles.input}
            placeholder="GHA-123-4567-8"
            required
            maxLength={14} // GHA-XXX-XXXX-X format
          />
          <div className={styles.inputHint}>Format: GHA-XXX-XXXX-X</div>
        </div>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🏠</span>
            <span>View Your Property Details</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>💰</span>
            <span>Pay Rates with Mobile Money</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>📱</span>
            <span>Download Digital Receipts</span>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className={styles.spinner}></div>
              {isSignUp ? "Creating Account..." : "Verifying..."}
            </>
          ) : isSignUp ? (
            "Create Account & Verify"
          ) : (
            "Verify & Continue"
          )}
        </button>

        <div className={styles.authSwitch}>
          <span>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            type="button"
            className={styles.switchButton}
            onClick={toggleAuthMode}
          >
            {isSignUp ? "Sign In" : "Create Account"}
          </button>
        </div>
      </form>

      <div className={styles.footer}>
        <div className={styles.helpSection}>
          <h3 className={styles.helpTitle}>Need Help?</h3>
          <p className={styles.helpText}>
            {isSignUp
              ? "Make sure your phone number and Ghana Card are registered with your municipal assembly."
              : "Use the same phone number and Ghana Card ID that you registered with your property."}
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>Support: +233 24 123 4567</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕒</span>
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          <button 
            type="button"
            className={styles.supportButton} 
            onClick={handleSupportClick}
          >
            Contact Support
          </button>
        </div>

        <div className={styles.securityNote}>
          <span className={styles.securityIcon}>🔒</span>
          <span>
            Your information is secure and protected by Ghana's Data Protection Act
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyOwnerAuth;