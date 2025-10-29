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
              Ghana Municipal Property Rates Platform
            </div>
            <h1 className={styles.heroTitle}>
              Digital Property Rate
              <span className={styles.highlight}> Payments Made Simple</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Pay your municipal property rates instantly using your Ghana Card
              and phone number. Secure mobile money and card payments with
              instant digital receipts.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <span className={styles.buttonIcon}>📱</span>
                Pay with Mobile Money
                <span className={styles.buttonArrow}>→</span>
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>👨‍💼</span>
                Field Collector Login
              </button>
            </div>

            {/* Trust Badges - Aligned with specifications */}
            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🆔</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>Ghana Card Verified</div>
                  <div className={styles.trustSubtitle}>
                    Secure Authentication
                  </div>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🛡️</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>PCI-DSS Compliant</div>
                  <div className={styles.trustSubtitle}>
                    Powered by Paystack
                  </div>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>📄</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>
                    Instant Digital Receipts
                  </div>
                  <div className={styles.trustSubtitle}>Downloadable PDF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Property Owner Dashboard Preview */}
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
                <div className={styles.balanceLabel}>Current Bill Due</div>
                <div className={styles.balanceAmount}>GH₵ 450.00</div>
                <div className={styles.balanceDetails}>
                  <span className={styles.detailItem}>
                    Rateable Value: GH₵ 15,000
                  </span>
                  <span className={styles.detailItem}>Assembly Rate: 3%</span>
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
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
          </div>
        </div>
      </section>

      {/* Authentication Section - Ghana Card & Phone Verification */}
      <section className={styles.authSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Secure Ghana Card Verification
          </h2>
          <p className={styles.sectionSubtitle}>
            Your identity is protected with Ghana Card ID and phone number
            verification
          </p>
        </div>
        <div className={styles.authSteps}>
          <div className={styles.authStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Enter Ghana Card ID</h3>
              <p>
                Provide your Ghana Card identification number for verification
              </p>
            </div>
          </div>
          <div className={styles.authStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Verify Phone Number</h3>
              <p>Receive OTP on your registered mobile number</p>
            </div>
          </div>
          <div className={styles.authStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Access Your Properties</h3>
              <p>View and manage all your linked properties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section - MVP Scope Only */}
      <section className={styles.paymentSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Secure Payment Methods</h2>
          <p className={styles.sectionSubtitle}>
            Choose from verified payment channels available in Ghana
          </p>
        </div>
        <div className={styles.paymentGrid}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>📱</span>
            </div>
            <h3 className={styles.paymentTitle}>Mobile Money</h3>
            <p className={styles.paymentDescription}>
              MTN Mobile Money & Vodafone Cash via Paystack
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Instant</span>
              <span className={styles.feature}>Secure</span>
              <span className={styles.feature}>24/7</span>
            </div>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>💳</span>
            </div>
            <h3 className={styles.paymentTitle}>Bank Cards</h3>
            <p className={styles.paymentDescription}>
              Visa & Mastercard payments secured by Paystack
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Fast</span>
              <span className={styles.feature}>Reliable</span>
              <span className={styles.feature}>PCI-DSS</span>
            </div>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>👨‍💼</span>
            </div>
            <h3 className={styles.paymentTitle}>Field Collector</h3>
            <p className={styles.paymentDescription}>
              Pay authorized collectors with offline receipt generation
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Offline</span>
              <span className={styles.feature}>Digital Receipt</span>
              <span className={styles.feature}>Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Platform Features</h2>
          <p className={styles.sectionSubtitle}>
            Designed for Ghana's municipal rate collection needs
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>📱</span>
            </div>
            <h3 className={styles.featureTitle}>Mobile-First Design</h3>
            <p className={styles.featureDescription}>
              Optimized for iOS & Android devices, works on all smartphones
              across Ghana
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🆔</span>
            </div>
            <h3 className={styles.featureTitle}>Ghana Card Verification</h3>
            <p className={styles.featureDescription}>
              Secure authentication using Ghana Card ID and phone number
              verification
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>📄</span>
            </div>
            <h3 className={styles.featureTitle}>Digital Receipts</h3>
            <p className={styles.featureDescription}>
              Instant downloadable PDF receipts for all payments with secure
              storage
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🔔</span>
            </div>
            <h3 className={styles.featureTitle}>Real-time Notifications</h3>
            <p className={styles.featureDescription}>
              Push notifications and SMS alerts for bills and payment
              confirmations
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>💬</span>
            </div>
            <h3 className={styles.featureTitle}>Dedicated Support</h3>
            <p className={styles.featureDescription}>
              In-app chat and municipal support lines for assistance
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🏠</span>
            </div>
            <h3 className={styles.featureTitle}>Property Management</h3>
            <p className={styles.featureDescription}>
              Link multiple properties using Unique Property ID or phone number
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section - Aligned with User Stories */}
      <section className={styles.worksSection} id="how-it-works">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How RatePoint Works</h2>
          <p className={styles.sectionSubtitle}>
            Simple three-step process for property owners
          </p>
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Verify with Ghana Card</h3>
              <p className={styles.stepDescription}>
                Sign up using your Ghana Card ID and phone number for secure
                verification
              </p>
            </div>
            <div className={styles.stepVisual}>
              <span className={styles.stepIcon}>🆔</span>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Find Your Property</h3>
              <p className={styles.stepDescription}>
                Search using Unique Property ID or link properties to your
                account
              </p>
            </div>
            <div className={styles.stepVisual}>
              <span className={styles.stepIcon}>🔍</span>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Pay & Get Receipt</h3>
              <p className={styles.stepDescription}>
                Choose Mobile Money or Card payment and receive instant digital
                receipt
              </p>
            </div>
            <div className={styles.stepVisual}>
              <span className={styles.stepIcon}>🧾</span>
            </div>
          </div>
        </div>
      </section>

      {/* For Field Collectors Section */}
      <section className={styles.collectorSection}>
        <div className={styles.collectorContent}>
          <div className={styles.collectorText}>
            <h2>For Field Collectors</h2>
            <p>
              Offline-capable mobile app for property registration and payment
              collection
            </p>
            <ul className={styles.collectorFeatures}>
              <li>✅ Offline property registration with GPS</li>
              <li>✅ Digital bill issuance with QR codes</li>
              <li>✅ Offline payment recording</li>
              <li>✅ Automatic sync when online</li>
              <li>✅ Performance dashboard</li>
            </ul>
            <button className={styles.collectorCta}>
              Download Collector App
            </button>
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
                <div className={styles.offlineBadge}>
                  🔄 Offline Mode Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Pilot Metrics */}
      <section className={styles.statsSection}>
        <div className={styles.statsBackground}></div>
        <div className={styles.statsContent}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>Pilot</div>
            <div className={styles.statLabel}>Launch Ready</div>
            <div className={styles.statSubtitle}>January 26th, 2026</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99.5%</div>
            <div className={styles.statLabel}>Uptime SLA</div>
            <div className={styles.statSubtitle}>Reliable Service</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Secure</div>
            <div className={styles.statSubtitle}>PCI-DSS Compliant</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>24/7</div>
            <div className={styles.statLabel}>Support</div>
            <div className={styles.statSubtitle}>Always Available</div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.finalCta}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Pay Your Property Rates?
            </h2>
            <p className={styles.ctaDescription}>
              Join Ghana's digital transformation of municipal rate collection.
              Fast, secure, and convenient payments powered by Ghana Card
              verification.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Download Citizen App
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button className={styles.ctaSecondary}>
                Municipal Admin Portal
              </button>
            </div>
          </div>
          <div className={styles.ctaVisual}>
            <div className={styles.ctaOrb}></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer} id="support">
        <div className={styles.footerContent}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.logoIcon}>🏠</span>
                <span className={styles.logoText}>RatePoint</span>
              </div>
              <p className={styles.footerDescription}>
                Ghana's trusted digital platform for municipal property rate
                collection. Making tax compliance simple and accessible for all
                citizens.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  📘
                </a>
                <a href="#" className={styles.socialLink}>
                  📷
                </a>
                <a href="#" className={styles.socialLink}>
                  🐦
                </a>
                <a href="#" className={styles.socialLink}>
                  💼
                </a>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Platform</h4>
                <a href="#features" className={styles.link}>
                  Features
                </a>
                <a href="#how-it-works" className={styles.link}>
                  How It Works
                </a>
                <a href="#" className={styles.link}>
                  Payment Methods
                </a>
                <a href="#" className={styles.link}>
                  Security
                </a>
              </div>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Support</h4>
                <a href="#" className={styles.link}>
                  Help Center
                </a>
                <a href="#" className={styles.link}>
                  Contact Municipal Office
                </a>
                <a href="#" className={styles.link}>
                  FAQ
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
                  Data Protection Act
                </a>
                <a href="#" className={styles.link}>
                  PCI-DSS Compliance
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
                <div className={styles.contactLabel}>Municipal Help Line</div>
                <div className={styles.contactValue}>
                  Contact Local Assembly
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🏛️</span>
              <div>
                <div className={styles.contactLabel}>Pilot Launch</div>
                <div className={styles.contactValue}>January 26th, 2026</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; 2024 RatePoint - A 1st Son Corporations Platform. All rights
            reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Privacy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms
            </a>
            <a href="#" className={styles.legalLink}>
              Data Protection
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHomePage;
