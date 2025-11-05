import styles from "./PublicHomePage.module.css";

const PublicHomePage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🏠</span>
              Ghana's Digital Property Rates Platform
            </div>
            <h1 className={styles.heroTitle}>
              Property Rate Payments
              <span className={styles.highlight}> Made Simple</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Pay your municipal property rates quickly and securely using your
              Ghana Card and phone number. Get instant receipts and track your
              payments all in one place.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <span className={styles.buttonIcon}>📱</span>
                Pay Your Rates Now
                <span className={styles.buttonArrow}>→</span>
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>👨‍💼</span>
                Collector Login
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🆔</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>Ghana Card Verified</div>
                  <div className={styles.trustSubtitle}>
                    Your identity is protected
                  </div>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🛡️</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>Secure Payments</div>
                  <div className={styles.trustSubtitle}>
                    Powered by Paystack
                  </div>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>📄</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>Digital Receipts</div>
                  <div className={styles.trustSubtitle}>Download anytime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>🏠</div>
                <div className={styles.cardUser}>
                  <div className={styles.userName}>Property: RES-2024-001</div>
                  <div className={styles.userRole}>
                    Accra Metropolitan Assembly
                  </div>
                </div>
              </div>
              <div className={styles.cardBalance}>
                <div className={styles.balanceLabel}>Amount Due</div>
                <div className={styles.balanceAmount}>GH₵ 450.00</div>
                <div className={styles.balanceDetails}>
                  <span className={styles.detailItem}>Value: GH₵ 15,000</span>
                  <span className={styles.detailItem}>Rate: 3%</span>
                </div>
              </div>
              <div className={styles.paymentOptions}>
                <button className={styles.momoButton}>
                  <span className={styles.payIcon}>📱</span>
                  Mobile Money
                </button>
                <button className={styles.cardButton}>
                  <span className={styles.payIcon}>💳</span>
                  Card Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.authSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Simple steps to pay your property rates
          </p>
        </div>
        <div className={styles.authSteps}>
          <div className={styles.authStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Enter Ghana Card ID</h3>
              <p>Use your Ghana Card number to verify your identity</p>
            </div>
          </div>
          <div className={styles.authStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Verify Phone Number</h3>
              <p>Get a code sent to your mobile number</p>
            </div>
          </div>
          <div className={styles.authStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Pay & Get Receipt</h3>
              <p>Choose payment method and get instant receipt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className={styles.paymentSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Payment Methods</h2>
          <p className={styles.sectionSubtitle}>Choose how you want to pay</p>
        </div>
        <div className={styles.paymentGrid}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>📱</span>
            </div>
            <h3 className={styles.paymentTitle}>Mobile Money</h3>
            <p className={styles.paymentDescription}>
              MTN Mobile Money and Vodafone Cash
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Instant</span>
              <span className={styles.feature}>Secure</span>
            </div>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>💳</span>
            </div>
            <h3 className={styles.paymentTitle}>Bank Cards</h3>
            <p className={styles.paymentDescription}>
              Visa and Mastercard payments
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Fast</span>
              <span className={styles.feature}>Reliable</span>
            </div>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>👨‍💼</span>
            </div>
            <h3 className={styles.paymentTitle}>Field Collector</h3>
            <p className={styles.paymentDescription}>
              Pay authorized collectors in person
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Offline</span>
              <span className={styles.feature}>Receipt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose RatePoint</h2>
          <p className={styles.sectionSubtitle}>
            Built for Ghana's property owners
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>📱</span>
            </div>
            <h3 className={styles.featureTitle}>Mobile Friendly</h3>
            <p className={styles.featureDescription}>
              Works perfectly on all smartphones across Ghana
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🆔</span>
            </div>
            <h3 className={styles.featureTitle}>Ghana Card Secure</h3>
            <p className={styles.featureDescription}>
              Your Ghana Card keeps everything safe and verified
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>📄</span>
            </div>
            <h3 className={styles.featureTitle}>Digital Receipts</h3>
            <p className={styles.featureDescription}>
              Get PDF receipts instantly after payment
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🔔</span>
            </div>
            <h3 className={styles.featureTitle}>Payment Alerts</h3>
            <p className={styles.featureDescription}>
              Get SMS and app notifications for bills and payments
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>💬</span>
            </div>
            <h3 className={styles.featureTitle}>Help Available</h3>
            <p className={styles.featureDescription}>
              Contact municipal support when you need help
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🏠</span>
            </div>
            <h3 className={styles.featureTitle}>Multiple Properties</h3>
            <p className={styles.featureDescription}>
              Manage all your properties in one place
            </p>
          </div>
        </div>
      </section>

      {/* For Collectors */}
      <section className={styles.collectorSection}>
        <div className={styles.collectorContent}>
          <div className={styles.collectorText}>
            <h2>For Field Collectors</h2>
            <p>Mobile app for property registration and payment collection</p>
            <ul className={styles.collectorFeatures}>
              <li>Register properties with GPS location</li>
              <li>Issue digital bills with QR codes</li>
              <li>Record payments offline</li>
              <li>Sync data when online</li>
              <li>Track your collection performance</li>
            </ul>
            <button className={styles.collectorCta}>Get Collector App</button>
          </div>
          <div className={styles.collectorVisual}>
            <div className={styles.collectorDevice}>
              <div className={styles.collectorScreen}>
                <div className={styles.collectorHeader}>Field Collector</div>
                <div className={styles.collectorItem}>
                  <span>📍</span>
                  <span>Register Property</span>
                </div>
                <div className={styles.collectorItem}>
                  <span>🧾</span>
                  <span>Issue Bills</span>
                </div>
                <div className={styles.collectorItem}>
                  <span>💵</span>
                  <span>Collect Payments</span>
                </div>
                <div className={styles.collectorItem}>
                  <span>📊</span>
                  <span>View Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className={styles.finalCta}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Pay Your Property Rates?
            </h2>
            <p className={styles.ctaDescription}>
              Join thousands of Ghanaians using RatePoint for fast, secure
              property rate payments. No more long queues or paperwork.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Download Citizen App
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button className={styles.ctaSecondary}>Municipal Portal</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.logoIcon}>🏠</span>
                <span className={styles.logoText}>RatePoint</span>
              </div>
              <p className={styles.footerDescription}>
                Ghana's digital platform for municipal property rate collection.
                Making tax compliance simple for everyone.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Platform</h4>
                <a href="#" className={styles.link}>
                  Features
                </a>
                <a href="#" className={styles.link}>
                  How It Works
                </a>
                <a href="#" className={styles.link}>
                  Payment Methods
                </a>
              </div>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Support</h4>
                <a href="#" className={styles.link}>
                  Help Center
                </a>
                <a href="#" className={styles.link}>
                  Contact Office
                </a>
                <a href="#" className={styles.link}>
                  App Download
                </a>
              </div>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Legal</h4>
                <a href="#" className={styles.link}>
                  Privacy Policy
                </a>
                <a href="#" className={styles.link}>
                  Terms of Service
                </a>
                <a href="#" className={styles.link}>
                  Data Protection
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <div>
                <div className={styles.contactLabel}>Support Email</div>
                <div className={styles.contactValue}>
                  support@ratepoint.gov.gh
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <div className={styles.contactLabel}>Help Line</div>
                <div className={styles.contactValue}>
                  Contact Local Assembly
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; 2024 RatePoint - A 1st Son Corporations Platform. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicHomePage;
