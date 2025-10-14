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
              <span className={styles.badgeIcon}>🏆</span>
              Ghana's Leading Property Tax Platform
            </div>
            <h1 className={styles.heroTitle}>
              Property Tax Payments
              <span className={styles.highlight}> Made Simple</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Pay your property rates instantly from anywhere in Ghana. No
              queues, no paperwork—just secure digital payments with instant
              receipts.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <span className={styles.buttonIcon}>💳</span>
                Pay Bills Now
                <span className={styles.buttonArrow}>→</span>
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>📱</span>
                How It Works
              </button>
            </div>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🛡️</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>PCI-DSS Compliant</div>
                  <div className={styles.trustSubtitle}>
                    Bank-level security
                  </div>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>⚡</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>Instant Payments</div>
                  <div className={styles.trustSubtitle}>24/7 availability</div>
                </div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>🎯</div>
                <div className={styles.trustText}>
                  <div className={styles.trustTitle}>98% Success Rate</div>
                  <div className={styles.trustSubtitle}>Reliable service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>🏠</div>
                <div className={styles.cardUser}>
                  <div className={styles.userName}>Kwame Mensah</div>
                  <div className={styles.userRole}>Property Owner</div>
                </div>
              </div>
              <div className={styles.cardBalance}>
                <div className={styles.balanceLabel}>Current Balance</div>
                <div className={styles.balanceAmount}>GH₵ 450.00</div>
              </div>
              <button className={styles.payButton}>
                <span className={styles.payIcon}>⚡</span>
                Pay Now
              </button>
            </div>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
            <div className={styles.floatingElement3}></div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className={styles.paymentSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Multiple Payment Options</h2>
          <p className={styles.sectionSubtitle}>
            Choose from various secure payment methods available across Ghana
          </p>
        </div>
        <div className={styles.paymentGrid}>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>📱</span>
            </div>
            <h3 className={styles.paymentTitle}>Mobile Money</h3>
            <p className={styles.paymentDescription}>
              MTN, Vodafone, and AirtelTigo Mobile Money
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
              Visa, Mastercard, and local bank cards
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Fast</span>
              <span className={styles.feature}>Reliable</span>
            </div>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>🏦</span>
            </div>
            <h3 className={styles.paymentTitle}>Bank Transfer</h3>
            <p className={styles.paymentDescription}>
              Direct transfer from your bank account
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Easy</span>
              <span className={styles.feature}>Direct</span>
            </div>
          </div>
          <div className={styles.paymentCard}>
            <div className={styles.paymentIcon}>
              <span className={styles.paymentEmoji}>📲</span>
            </div>
            <h3 className={styles.paymentTitle}>USSD</h3>
            <p className={styles.paymentDescription}>
              Pay using USSD codes from any phone
            </p>
            <div className={styles.paymentFeatures}>
              <span className={styles.feature}>Simple</span>
              <span className={styles.feature}>Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Choose RatePoint?</h2>
          <p className={styles.sectionSubtitle}>
            Experience the future of property tax payments in Ghana
          </p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🚀</span>
            </div>
            <h3 className={styles.featureTitle}>Lightning Fast</h3>
            <p className={styles.featureDescription}>
              Complete payments in under 60 seconds from anywhere in Ghana
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🔒</span>
            </div>
            <h3 className={styles.featureTitle}>Bank-Grade Security</h3>
            <p className={styles.featureDescription}>
              Your transactions are protected with military-grade encryption
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>📄</span>
            </div>
            <h3 className={styles.featureTitle}>Digital Records</h3>
            <p className={styles.featureDescription}>
              All receipts and payment history stored securely in your account
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>🌍</span>
            </div>
            <h3 className={styles.featureTitle}>Nationwide Coverage</h3>
            <p className={styles.featureDescription}>
              Serving property owners across all 16 regions of Ghana
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>💬</span>
            </div>
            <h3 className={styles.featureTitle}>24/7 Support</h3>
            <p className={styles.featureDescription}>
              Get help anytime with our dedicated customer support team
            </p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIconWrapper}>
              <span className={styles.featureIcon}>📱</span>
            </div>
            <h3 className={styles.featureTitle}>Mobile Optimized</h3>
            <p className={styles.featureDescription}>
              Perfect experience on any device - mobile, tablet, or desktop
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.worksSection} id="how-it-works">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>How It Works</h2>
          <p className={styles.sectionSubtitle}>
            Get started with RatePoint in three simple steps
          </p>
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Find Your Property</h3>
              <p className={styles.stepDescription}>
                Search using your Property ID, location, or owner information
              </p>
            </div>
            <div className={styles.stepVisual}>
              <span className={styles.stepIcon}>🔍</span>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Review Your Bill</h3>
              <p className={styles.stepDescription}>
                View detailed breakdown of current and previous property tax
                bills
              </p>
            </div>
            <div className={styles.stepVisual}>
              <span className={styles.stepIcon}>📊</span>
            </div>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Pay Securely</h3>
              <p className={styles.stepDescription}>
                Choose your preferred payment method and complete transaction
              </p>
            </div>
            <div className={styles.stepVisual}>
              <span className={styles.stepIcon}>💳</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsBackground}></div>
        <div className={styles.statsContent}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50K+</div>
            <div className={styles.statLabel}>Properties</div>
            <div className={styles.statSubtitle}>Registered Nationwide</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>GH₵15M+</div>
            <div className={styles.statLabel}>Revenue</div>
            <div className={styles.statSubtitle}>Securely Processed</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Satisfaction</div>
            <div className={styles.statSubtitle}>Customer Rating</div>
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
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of property owners across Ghana who trust RatePoint
              for their property tax payments
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Start Paying Now
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button className={styles.ctaSecondary}>Contact Our Team</button>
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
                Ghana's most trusted digital platform for property tax
                collection and payments. Making tax compliance simple and
                accessible for everyone.
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
                  Contact Us
                </a>
                <a href="#" className={styles.link}>
                  FAQ
                </a>
                <a href="#" className={styles.link}>
                  Status
                </a>
              </div>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkTitle}>Company</h4>
                <a href="#" className={styles.link}>
                  About Us
                </a>
                <a href="#" className={styles.link}>
                  Blog
                </a>
                <a href="#" className={styles.link}>
                  Careers
                </a>
                <a href="#" className={styles.link}>
                  Partners
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📧</span>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>
                  support@ratepoint.gov.gh
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>0302 123 4567</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕒</span>
              <div>
                <div className={styles.contactLabel}>Hours</div>
                <div className={styles.contactValue}>
                  Mon-Fri: 8:00 AM - 5:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; 2024 RatePoint - Digital Property Tax Platform. All rights
            reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms of Service
            </a>
            <a href="#" className={styles.legalLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicHomePage;
