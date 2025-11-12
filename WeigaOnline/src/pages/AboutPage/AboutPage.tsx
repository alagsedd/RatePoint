import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  // Sample data - replace with actual content
  const historyTimeline = [
    {
      year: "Pre-1900",
      title: "Early Settlement",
      description: "The Weiga people establish their community in the fertile lands, building the foundations of our rich cultural heritage."
    },
    {
      year: "1920",
      title: "Formation of Traditional Council",
      description: "Establishment of the formal traditional governance system with the first Queen Mother installation."
    },
    {
      year: "1957",
      title: "Independence Era",
      description: "Weiga Traditional Area plays active role in the nation's independence movement."
    },
    {
      year: "1985",
      title: "Cultural Renaissance",
      description: "Revival of traditional festivals and cultural practices under new leadership."
    },
    {
      year: "2010",
      title: "Modern Development",
      description: "Infrastructure development and educational initiatives transform the community."
    }
  ];

  const culturalValues = [
    {
      icon: "👑",
      title: "Respect for Leadership",
      description: "Honoring traditional authority and wisdom of elders"
    },
    {
      icon: "🤝",
      title: "Community Unity",
      description: "Working together for collective progress and wellbeing"
    },
    {
      icon: "🌱",
      title: "Environmental Stewardship",
      description: "Protecting our natural resources for future generations"
    },
    {
      icon: "📚",
      title: "Cultural Preservation",
      description: "Maintaining our traditions, language, and heritage"
    }
  ];

  const festivals = [
    {
      name: "Yam Festival",
      period: "August",
      significance: "Thanksgiving for harvest and ancestral blessings"
    },
    {
      name: "Damba Festival",
      period: "September",
      significance: "Celebration of birth and naming of Prophet Mohammed"
    },
    {
      name: "Fire Festival",
      period: "December",
      significance: "Purification and renewal for the new year"
    }
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Weiga Traditional Area</h1>
          <p className={styles.heroSubtitle}>
            A Rich Heritage of Culture, Tradition, and Community Leadership
          </p>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.placeholderHero}>Historical Image - img1</div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2>Our Story</h2>
              <p>
                The Weiga Traditional Area is a vibrant community with a rich history 
                spanning centuries. Located in the heart of our ancestral lands, we 
                have preserved our cultural identity while embracing progress and 
                development.
              </p>
              <p>
                Under the wise leadership of our Queen Mother, Nana [Name], we 
                continue to uphold the traditions and values that have sustained 
                our people for generations. Our community is built on principles 
                of unity, respect, and collective responsibility.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Villages</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>50K+</span>
                  <span className={styles.statLabel}>People</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>200+</span>
                  <span className={styles.statLabel}>Years of History</span>
                </div>
              </div>
            </div>
            <div className={styles.introImage}>
              <div className={styles.placeholderImage}>Community Image - img2</div>
            </div>
          </div>
        </div>
      </section>

      {/* Queen Mother Section */}
      <section className={styles.queenMotherSection}>
        <div className={styles.container}>
          <div className={styles.queenMotherGrid}>
            <div className={styles.queenMotherImage}>
              <div className={styles.placeholderQueen}>Queen Mother Image - img3</div>
            </div>
            <div className={styles.queenMotherContent}>
              <h2>Our Queen Mother</h2>
              <h3>Nana [Queen Mother's Name]</h3>
              <p>
                Her Royal Majesty, Nana [Name], serves as the traditional ruler 
                and spiritual leader of the Weiga Traditional Area. Installed in 
                [Year], she has dedicated her reign to community development, 
                cultural preservation, and the empowerment of women and youth.
              </p>
              <div className={styles.leadershipHighlights}>
                <div className={styles.highlight}>
                  <strong>Vision:</strong> Sustainable development through cultural values
                </div>
                <div className={styles.highlight}>
                  <strong>Focus Areas:</strong> Education, Healthcare, Economic Empowerment
                </div>
                <div className={styles.highlight}>
                  <strong>Achievements:</strong> [List key achievements]
                </div>
              </div>
              <Link to="/contact" className={styles.contactButton}>
                Send Message to Queen Mother
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className={styles.historySection}>
        <div className={styles.container}>
          <h2>Our Historical Journey</h2>
          <div className={styles.timeline}>
            {historyTimeline.map((event, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{event.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2>Our Cultural Values</h2>
          <div className={styles.valuesGrid}>
            {culturalValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals & Traditions */}
      <section className={styles.festivalsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Festivals & Traditions</h2>
            <p>Celebrating our cultural heritage throughout the year</p>
          </div>
          <div className={styles.festivalsGrid}>
            {festivals.map((festival, index) => (
              <div key={index} className={styles.festivalCard}>
                <h3>{festival.name}</h3>
                <div className={styles.festivalPeriod}>{festival.period}</div>
                <p>{festival.significance}</p>
                <div className={styles.festivalImage}>
                  <div className={styles.placeholderFestival}>Festival Image - img{index + 4}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className={styles.governanceSection}>
        <div className={styles.container}>
          <h2>Traditional Governance</h2>
          <div className={styles.governanceContent}>
            <div className={styles.governanceText}>
              <p>
                The Weiga Traditional Area operates under a well-structured 
                governance system that combines traditional leadership with 
                modern administrative practices.
              </p>
              <ul className={styles.governanceList}>
                <li><strong>Queen Mother:</strong> Spiritual and traditional leader</li>
                <li><strong>Traditional Council:</strong> Advisory and decision-making body</li>
                <li><strong>Elders:</strong> Custodians of tradition and customs</li>
                <li><strong>Youth Leaders:</strong> Representatives of the younger generation</li>
                <li><strong>Women's Leaders:</strong> Advocates for women's interests</li>
              </ul>
            </div>
            <div className={styles.governanceImage}>
              <div className={styles.placeholderGovernance}>Council Image - img7</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Experience Our Culture</h2>
            <p>
              Visit the Weiga Traditional Area and witness our rich heritage, 
              warm hospitality, and vibrant community life.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/gallery" className={styles.primaryButton}>
                View Cultural Gallery
              </Link>
              <Link to="/events" className={styles.secondaryButton}>
                Attend Our Festivals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;