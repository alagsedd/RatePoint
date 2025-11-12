import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.container}>
        <div className={styles.errorContent}>
          {/* Error Illustration/Image */}
          <div className={styles.errorIllustration}>
            <div className={styles.errorNumber}>404</div>
            <div className={styles.errorImage}>
              {/* You can replace this with an actual image later */}
              <div className={styles.placeholderImage}>
                Lost Traditional Symbol
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className={styles.errorMessage}>
            <h1 className={styles.errorTitle}>Page Not Found</h1>
            <p className={styles.errorDescription}>
              Oops! It seems the page you're looking for has wandered off like a
              lost traveler in our traditional lands. The path you seek might
              have moved or no longer exists.
            </p>

            <div className={styles.errorDetails}>
              <p>Here are some helpful links instead:</p>
              <ul className={styles.suggestionsList}>
                <li>• Check if you typed the correct web address</li>
                <li>• Return to our homepage</li>
                <li>• Browse our latest news and events</li>
                <li>• Visit our cultural gallery</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className={styles.actionButtons}>
              <Link to="/" className={styles.primaryButton}>
                🏠 Return Home
              </Link>
              <Link to="/contact" className={styles.secondaryButton}>
                📞 Get Help
              </Link>
              <button
                onClick={() => window.history.back()}
                className={styles.backButton}
              >
                ↩️ Go Back
              </button>
            </div>

            {/* Cultural Quote */}
            <div className={styles.culturalQuote}>
              <blockquote>
                "In our tradition, every path leads to wisdom. Even the wrong
                turns teach us about our journey."
              </blockquote>
              <cite>- Weiga Proverb</cite>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className={styles.quickNav}>
          <h3>Quick Links</h3>
          <div className={styles.navGrid}>
            <Link to="/about" className={styles.navCard}>
              <span className={styles.navIcon}>👑</span>
              <span>About Weiga</span>
            </Link>
            <Link to="/news" className={styles.navCard}>
              <span className={styles.navIcon}>📢</span>
              <span>News & Events</span>
            </Link>
            <Link to="/gallery" className={styles.navCard}>
              <span className={styles.navIcon}>🖼️</span>
              <span>Gallery</span>
            </Link>
            <Link to="/contact" className={styles.navCard}>
              <span className={styles.navIcon}>📞</span>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
