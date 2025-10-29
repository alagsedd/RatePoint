import styles from "./Support.module.css";

const Support = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span>🎯</span>
              Get Help Anytime
            </div>
            <h1 className={styles.heroTitle}>
              We're Here to
              <span className={styles.highlight}> Help You</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Having issues with payments, property linking, or account access?
              Our support team is ready to assist you with any challenges.
            </p>

            <div className={styles.supportStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support Available</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>2h</div>
                <div className={styles.statLabel}>Average Response Time</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Issue Resolution Rate</div>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>💬</div>
                <div>
                  <div className={styles.userName}>Support Center</div>
                  <div className={styles.userRole}>Always here to help</div>
                </div>
              </div>

              <div className={styles.supportOptions}>
                <div className={styles.option}>
                  <div className={styles.optionIcon}>📱</div>
                  <div className={styles.optionText}>
                    <div className={styles.optionTitle}>In-App Chat</div>
                    <div className={styles.optionSubtitle}>
                      Instant help within the app
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.optionIcon}>📞</div>
                  <div className={styles.optionText}>
                    <div className={styles.optionTitle}>Phone Support</div>
                    <div className={styles.optionSubtitle}>
                      Call us directly
                    </div>
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.optionIcon}>✉️</div>
                  <div className={styles.optionText}>
                    <div className={styles.optionTitle}>Email Support</div>
                    <div className={styles.optionSubtitle}>
                      Detailed assistance
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className={styles.contactSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Choose Your Support Channel</h2>
          <p className={styles.sectionSubtitle}>
            Multiple ways to get the help you need, when you need it
          </p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>💬</div>
            <h3 className={styles.contactTitle}>In-App Chat</h3>
            <p className={styles.contactDescription}>
              Get instant help directly within the RatePoint mobile app. Our
              support agents are available 24/7 for quick assistance.
            </p>
            <div className={styles.contactFeatures}>
              <span className={styles.feature}>Instant Response</span>
              <span className={styles.feature}>24/7 Available</span>
              <span className={styles.feature}>Screen Sharing</span>
            </div>
            <button className={styles.contactButton}>Open Chat in App</button>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>📞</div>
            <h3 className={styles.contactTitle}>Phone Support</h3>
            <p className={styles.contactDescription}>
              Speak directly with our support team for immediate assistance with
              urgent issues or complex problems.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Hotline:</span>
                <span className={styles.contactValue}>+233 123 456 789</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Hours:</span>
                <span className={styles.contactValue}>Mon-Sun, 6AM-10PM</span>
              </div>
            </div>
            <button className={styles.contactButton}>Call Now</button>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>✉️</div>
            <h3 className={styles.contactTitle}>Email Support</h3>
            <p className={styles.contactDescription}>
              Send us detailed descriptions of your issues. Perfect for
              non-urgent matters or when you need to share documents.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <span className={styles.contactValue}>
                  support@ratepoint.gov.gh
                </span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Response Time:</span>
                <span className={styles.contactValue}>Within 2 hours</span>
              </div>
            </div>
            <button className={styles.contactButton}>Send Email</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionSubtitle}>
            Quick answers to common questions about RatePoint
          </p>
        </div>

        <div className={styles.faqGrid}>
          <div className={styles.faqCategory}>
            <h3 className={styles.categoryTitle}>Account & Login</h3>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  How do I reset my password?
                </div>
                <div className={styles.faqAnswer}>
                  Use the "Forgot Password" option on the login screen. You'll
                  receive an SMS with a verification code to reset your
                  password.
                </div>
              </div>

              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  Why is my Ghana Card ID not working?
                </div>
                <div className={styles.faqAnswer}>
                  Ensure you're entering the exact ID number as registered with
                  the municipal assembly. Contact support if issues persist.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.faqCategory}>
            <h3 className={styles.categoryTitle}>Payments & Bills</h3>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  My payment failed but money was deducted
                </div>
                <div className={styles.faqAnswer}>
                  Don't worry! Failed payments are automatically refunded within
                  24 hours. Contact us if the refund doesn't appear.
                </div>
              </div>

              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  How do I get my payment receipt?
                </div>
                <div className={styles.faqAnswer}>
                  Receipts are automatically generated after successful
                  payments. You can download them from your payment history in
                  the app.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.faqCategory}>
            <h3 className={styles.categoryTitle}>Property Management</h3>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  Can't find my property in the app
                </div>
                <div className={styles.faqAnswer}>
                  Ensure you're using the correct Property ID from your bill. If
                  still not found, contact your municipal assembly for
                  verification.
                </div>
              </div>

              <div className={styles.faqItem}>
                <div className={styles.faqQuestion}>
                  How to update my property information?
                </div>
                <div className={styles.faqAnswer}>
                  Property updates must be done through your municipal assembly
                  office. Visit with relevant documents for verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className={styles.emergencySection}>
        <div className={styles.emergencyCard}>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyIcon}>🚨</div>
            <div className={styles.emergencyText}>
              <h3 className={styles.emergencyTitle}>Urgent Support Needed?</h3>
              <p className={styles.emergencyDescription}>
                For critical issues requiring immediate attention, use our
                emergency support channel
              </p>
            </div>
          </div>
          <button className={styles.emergencyButton}>Emergency Support</button>
        </div>
      </section>
    </div>
  );
};

export default Support;
