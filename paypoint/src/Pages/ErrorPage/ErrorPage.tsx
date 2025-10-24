import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.backgroundAnimation}></div>

      <div className={styles.content}>
        {/* Animated 404 Number */}
        <div className={styles.errorNumber}>
          <span className={styles.number}>4</span>
          <span className={styles.number}>0</span>
          <span className={styles.number}>4</span>
        </div>

        {/* Main Error Content */}
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>🚧</div>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.subtitle}>
            Oops! The page you're looking for seems to have wandered off into
            the digital void.
          </p>
          <p className={styles.description}>
            Don't worry, this happens to the best of us. Let's get you back on
            track.
          </p>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <button
              className={styles.primaryButton}
              onClick={() => navigate(-1)}
            >
              <span className={styles.buttonIcon}>↶</span>
              Go Back
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() => navigate("/")}
            >
              <span className={styles.buttonIcon}>🏠</span>
              Homepage
            </button>
            <button
              className={styles.tertiaryButton}
              onClick={() => window.location.reload()}
            >
              <span className={styles.buttonIcon}>🔄</span>
              Reload Page
            </button>
          </div>

          {/* Help Section */}
          <div className={styles.helpSection}>
            <div className={styles.helpItem}>
              <div className={styles.helpIcon}>🔍</div>
              <div className={styles.helpText}>
                <h4>Check the URL</h4>
                <p>Make sure you've entered the correct address</p>
              </div>
            </div>
            <div className={styles.helpItem}>
              <div className={styles.helpIcon}>📧</div>
              <div className={styles.helpText}>
                <h4>Contact Support</h4>
                <p>We're here to help you find what you need</p>
              </div>
            </div>
            <div className={styles.helpItem}>
              <div className={styles.helpIcon}>🔧</div>
              <div className={styles.helpText}>
                <h4>Technical Help</h4>
                <p>Check our status page for any ongoing issues</p>
              </div>
            </div>
          </div>

          {/* Search Suggestion */}
          <div className={styles.searchSection}>
            <p className={styles.searchPrompt}>
              Can't find what you're looking for?
            </p>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search RatePoint..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <span className={styles.searchIcon}>🔍</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className={styles.floatingElement1}></div>
        <div className={styles.floatingElement2}></div>
        <div className={styles.floatingElement3}></div>
      </div>

      {/* Footer Note */}
      <div className={styles.footerNote}>
        <p>
          If you believe this is an error, please contact our support team at
          <a
            href="mailto:support@ratepoint.gov.gh"
            className={styles.supportLink}
          >
            support@ratepoint.gov.gh
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
