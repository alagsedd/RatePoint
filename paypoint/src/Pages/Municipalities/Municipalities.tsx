import styles from "./Municipalities.module.css";
import { useState } from "react";

interface Municipality {
  id: string;
  name: string;
  region: string;
  logo: string;
  totalProperties: number;
  activeCollectors: number;
  collectionRate: number;
  revenue: number;
  growth: number;
  status: "active" | "high-performance" | "moderate";
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

const Municipalities = () => {
  const [activeRegion, setActiveRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const municipalities: Municipality[] = [
    {
      id: "ACC-001",
      name: "Accra Metropolitan",
      region: "Greater Accra",
      logo: "🏙️",
      totalProperties: 15420,
      activeCollectors: 45,
      collectionRate: 92,
      revenue: 8450000,
      growth: 12.5,
      status: "high-performance",
      contact: {
        phone: "+233 30 234 5678",
        email: "accra@ratepoint.gov.gh",
        address: "Accra Central, Independence Avenue",
      },
    },
    {
      id: "KUM-001",
      name: "Kumasi Metropolitan",
      region: "Ashanti",
      logo: "👑",
      totalProperties: 12850,
      activeCollectors: 38,
      collectionRate: 88,
      revenue: 7120000,
      growth: 8.7,
      status: "active",
      contact: {
        phone: "+233 32 234 5678",
        email: "kumasi@ratepoint.gov.gh",
        address: "Adum Central, Kumasi",
      },
    },
    {
      id: "TEM-001",
      name: "Tema Metropolitan",
      region: "Greater Accra",
      logo: "⚓",
      totalProperties: 8760,
      activeCollectors: 28,
      collectionRate: 85,
      revenue: 5230000,
      growth: 6.3,
      status: "active",
      contact: {
        phone: "+233 30 334 5678",
        email: "tema@ratepoint.gov.gh",
        address: "Community 1, Tema",
      },
    },
    {
      id: "TAK-001",
      name: "Takoradi Metropolitan",
      region: "Western",
      logo: "🛳️",
      totalProperties: 6540,
      activeCollectors: 22,
      collectionRate: 81,
      revenue: 3870000,
      growth: 4.2,
      status: "moderate",
      contact: {
        phone: "+233 31 234 5678",
        email: "takoradi@ratepoint.gov.gh",
        address: "Harbor Road, Takoradi",
      },
    },
    {
      id: "TAM-001",
      name: "Tamale Metropolitan",
      region: "Northern",
      logo: "🌰",
      totalProperties: 5430,
      activeCollectors: 18,
      collectionRate: 78,
      revenue: 2980000,
      growth: 9.1,
      status: "active",
      contact: {
        phone: "+233 37 234 5678",
        email: "tamale@ratepoint.gov.gh",
        address: "Central Market, Tamale",
      },
    },
    {
      id: "SEK-001",
      name: "Sekondi-Takoradi",
      region: "Western",
      logo: "🌊",
      totalProperties: 4980,
      activeCollectors: 16,
      collectionRate: 76,
      revenue: 2650000,
      growth: 5.8,
      status: "moderate",
      contact: {
        phone: "+233 31 334 5678",
        email: "sekondi@ratepoint.gov.gh",
        address: "Sekondi Central, Western Region",
      },
    },
  ];

  const regions = [
    "all",
    "Greater Accra",
    "Ashanti",
    "Western",
    "Northern",
    "Eastern",
    "Central",
    "Volta",
  ];

  const filteredMunicipalities = municipalities.filter((municipality) => {
    const matchesSearch =
      municipality.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      municipality.region.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeRegion === "all") return matchesSearch;
    return matchesSearch && municipality.region === activeRegion;
  });

  const stats = {
    totalMunicipalities: municipalities.length,
    totalProperties: municipalities.reduce(
      (acc, curr) => acc + curr.totalProperties,
      0
    ),
    totalRevenue: municipalities.reduce((acc, curr) => acc + curr.revenue, 0),
    avgCollectionRate: Math.round(
      municipalities.reduce((acc, curr) => acc + curr.collectionRate, 0) /
        municipalities.length
    ),
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-GH", {
      style: "currency",
      currency: "GHS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🏢</span>
              Municipal Partnerships
            </div>
            <h1 className={styles.heroTitle}>
              Partner <span className={styles.highlight}>Municipalities</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Discover our network of municipal assembly partners across Ghana.
              Track performance metrics, revenue collection, and growth
              statistics for efficient property rate management.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>📊</div>
                <div>
                  <div className={styles.userName}>Municipal Network</div>
                  <div className={styles.userRole}>Ghana Property Rates</div>
                </div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>
                    {stats.totalMunicipalities}
                  </div>
                  <div className={styles.statLabel}>Municipalities</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>
                    {(stats.totalProperties / 1000).toFixed(0)}K+
                  </div>
                  <div className={styles.statLabel}>Properties</div>
                </div>
              </div>
            </div>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏢</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>
                {stats.totalMunicipalities}
              </div>
              <div className={styles.statLabel}>Partner Municipalities</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🏠</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>
                {(stats.totalProperties / 1000).toFixed(0)}K+
              </div>
              <div className={styles.statLabel}>Total Properties</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>💰</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>
                {formatCurrency(stats.totalRevenue)}
              </div>
              <div className={styles.statLabel}>Total Revenue</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📈</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>
                {stats.avgCollectionRate}%
              </div>
              <div className={styles.statLabel}>Avg. Collection Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className={styles.controlsSection}>
        <div className={styles.controlsContainer}>
          <div className={styles.searchBar}>
            <div className={styles.searchInputWrapper}>
              <input
                type="text"
                placeholder="Search municipalities by name or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
            <button className={styles.partnerButton}>
              <span className={styles.partnerIcon}>🤝</span>
              Become a Partner
            </button>
          </div>

          <div className={styles.regionFilter}>
            <div className={styles.filterLabel}>Filter by Region:</div>
            <div className={styles.regionTags}>
              {regions.map((region) => (
                <button
                  key={region}
                  className={`${styles.regionTag} ${
                    activeRegion === region ? styles.active : ""
                  }`}
                  onClick={() => setActiveRegion(region)}
                >
                  {region === "all" ? "All Regions" : region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Municipalities Grid */}
      <section className={styles.municipalitiesSection}>
        <div className={styles.municipalitiesContainer}>
          <div className={styles.municipalitiesGrid}>
            {filteredMunicipalities.map((municipality) => (
              <div key={municipality.id} className={styles.municipalityCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.municipalityLogo}>
                    {municipality.logo}
                  </div>
                  <div className={styles.municipalityInfo}>
                    <h3 className={styles.municipalityName}>
                      {municipality.name}
                    </h3>
                    <p className={styles.municipalityRegion}>
                      {municipality.region} Region
                    </p>
                  </div>
                  <div
                    className={`${styles.status} ${
                      styles[municipality.status]
                    }`}
                  >
                    {municipality.status === "high-performance"
                      ? "High Performance"
                      : municipality.status}
                  </div>
                </div>

                <div className={styles.performanceStats}>
                  <div className={styles.performanceItem}>
                    <div className={styles.performanceLabel}>
                      Collection Rate
                    </div>
                    <div className={styles.performanceValue}>
                      <span className={styles.rateValue}>
                        {municipality.collectionRate}%
                      </span>
                      <div className={styles.rateBar}>
                        <div
                          className={styles.rateFill}
                          style={{ width: `${municipality.collectionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.performanceItem}>
                    <div className={styles.performanceLabel}>Revenue</div>
                    <div className={styles.revenueValue}>
                      {formatCurrency(municipality.revenue)}
                    </div>
                  </div>
                </div>

                <div className={styles.detailedStats}>
                  <div className={styles.statRow}>
                    <div className={styles.statItem}>
                      <span className={styles.statIcon}>🏠</span>
                      <div className={styles.statText}>
                        <div className={styles.statNumber}>
                          {municipality.totalProperties.toLocaleString()}
                        </div>
                        <div className={styles.statLabel}>Properties</div>
                      </div>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statIcon}>👥</span>
                      <div className={styles.statText}>
                        <div className={styles.statNumber}>
                          {municipality.activeCollectors}
                        </div>
                        <div className={styles.statLabel}>Collectors</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.growthIndicator}>
                    <span className={styles.growthIcon}>📈</span>
                    <span className={styles.growthText}>
                      +{municipality.growth}% growth this quarter
                    </span>
                  </div>
                </div>

                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <span className={styles.contactText}>
                      {municipality.contact.phone}
                    </span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📧</span>
                    <span className={styles.contactText}>
                      {municipality.contact.email}
                    </span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📍</span>
                    <span className={styles.contactText}>
                      {municipality.contact.address}
                    </span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button className={styles.viewButton}>
                    <span>👁️</span>
                    View Details
                  </button>
                  <button className={styles.contactButton}>
                    <span>💬</span>
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMunicipalities.length === 0 && (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🏢</div>
              <h3 className={styles.emptyTitle}>No municipalities found</h3>
              <p className={styles.emptyDescription}>
                Try adjusting your search criteria or explore other regions.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partnership CTA */}
      <section className={styles.partnershipSection}>
        <div className={styles.partnershipContainer}>
          <div className={styles.partnershipContent}>
            <h2 className={styles.partnershipTitle}>
              Become a Partner Municipality
            </h2>
            <p className={styles.partnershipDescription}>
              Join our growing network of municipal assemblies leveraging
              RatePoint for efficient property rate collection and management.
            </p>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>⚡</div>
                <h4 className={styles.benefitTitle}>Increased Efficiency</h4>
                <p className={styles.benefitDescription}>
                  Streamline your rate collection process with digital tools
                </p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>📊</div>
                <h4 className={styles.benefitTitle}>Real-time Analytics</h4>
                <p className={styles.benefitDescription}>
                  Access comprehensive reports and performance metrics
                </p>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>🤝</div>
                <h4 className={styles.benefitTitle}>Technical Support</h4>
                <p className={styles.benefitDescription}>
                  Get dedicated support and training for your team
                </p>
              </div>
            </div>
            <button className={styles.ctaButton}>
              <span>🚀</span>
              Start Partnership Process
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Municipalities;
