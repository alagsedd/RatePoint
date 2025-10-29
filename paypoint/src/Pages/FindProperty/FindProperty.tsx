import styles from "./FindProperty.module.css";
import { useState } from "react";
import type { FormEvent } from "react";

interface SearchMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  placeholder: string;
}

interface Property {
  id: string;
  address: string;
  owner: string;
  phone: string;
  rateableValue: number;
  currentBill: number;
  status: string;
}

const FindProperty = () => {
  const [searchMethod, setSearchMethod] = useState<string>("propertyId");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchMethods: SearchMethod[] = [
    {
      id: "propertyId",
      name: "Property ID",
      description: "Search using your unique property identification number",
      icon: "🔢",
      placeholder: "Enter Property ID (e.g., ACC-2024-001)",
    },
    {
      id: "phoneNumber",
      name: "Phone Number",
      description: "Search using registered phone number",
      icon: "📱",
      placeholder: "Enter phone number (e.g., 0201234567)",
    },
    {
      id: "location",
      name: "Location",
      description: "Search by area or street name",
      icon: "📍",
      placeholder: "Enter area or street name",
    },
  ];

  const mockProperties: Property[] = [
    {
      id: "ACC-2024-001",
      address: "123 Independence Avenue, Accra",
      owner: "Kwame Mensah",
      phone: "+233 20 123 4567",
      rateableValue: 15000,
      currentBill: 450.0,
      status: "active",
    },
    {
      id: "ACC-2024-002",
      address: "45 Liberation Road, Cantonments",
      owner: "Ama Serwaa",
      phone: "+233 24 765 4321",
      rateableValue: 25000,
      currentBill: 750.0,
      status: "active",
    },
  ];

  const handleSearch = (e: FormEvent): void => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockProperties);
      setIsLoading(false);
    }, 1500);
  };

  const handleLinkProperty = (propertyId: string): void => {
    // Simulate property linking
    alert(`Property ${propertyId} linked successfully!`);
    setSearchResults([]);
    setSearchQuery("");
  };

  const currentMethod = searchMethods.find(
    (method) => method.id === searchMethod
  );

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Find Your Property</h1>
            <p className={styles.heroSubtitle}>
              Search and link your property to view bills, make payments, and
              access your payment history.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.searchIllustration}>
              <span className={styles.illustrationIcon}>🔍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <div className={styles.searchHeader}>
            <h2 className={styles.sectionTitle}>Search Property</h2>
            <p className={styles.sectionSubtitle}>
              Choose your preferred search method to find your property
            </p>
          </div>

          {/* Search Method Selection */}
          <div className={styles.methodSelection}>
            {searchMethods.map((method) => (
              <button
                key={method.id}
                className={`${styles.methodCard} ${
                  searchMethod === method.id ? styles.active : ""
                }`}
                onClick={() => setSearchMethod(method.id)}
              >
                <div className={styles.methodIcon}>{method.icon}</div>
                <div className={styles.methodContent}>
                  <h3 className={styles.methodName}>{method.name}</h3>
                  <p className={styles.methodDescription}>
                    {method.description}
                  </p>
                </div>
                <div className={styles.radioIndicator}>
                  <div className={styles.radioDot}></div>
                </div>
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.searchInputGroup}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentMethod?.placeholder}
                  className={styles.searchInput}
                  required
                />
                <div className={styles.inputIcon}>{currentMethod?.icon}</div>
              </div>
              <button
                type="submit"
                className={styles.searchButton}
                disabled={isLoading || !searchQuery.trim()}
              >
                {isLoading ? (
                  <div className={styles.spinner}></div>
                ) : (
                  <>
                    <span className={styles.searchIcon}>🔍</span>
                    Search Property
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Tips */}
          <div className={styles.quickTips}>
            <h4 className={styles.tipsTitle}>Quick Tips:</h4>
            <div className={styles.tipsGrid}>
              <div className={styles.tipItem}>
                <span className={styles.tipIcon}>📄</span>
                <span>Find your Property ID on your rate bill</span>
              </div>
              <div className={styles.tipItem}>
                <span className={styles.tipIcon}>📱</span>
                <span>Use the phone number registered with the assembly</span>
              </div>
              <div className={styles.tipItem}>
                <span className={styles.tipIcon}>🏠</span>
                <span>Search by area name if you don't have the exact ID</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <section className={styles.resultsSection}>
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2 className={styles.sectionTitle}>Search Results</h2>
              <p className={styles.resultsCount}>
                Found {searchResults.length} propert
                {searchResults.length === 1 ? "y" : "ies"}
              </p>
            </div>

            <div className={styles.resultsGrid}>
              {searchResults.map((property) => (
                <div key={property.id} className={styles.propertyCard}>
                  <div className={styles.propertyHeader}>
                    <div className={styles.propertyId}>{property.id}</div>
                    <div
                      className={`${styles.status} ${styles[property.status]}`}
                    >
                      {property.status}
                    </div>
                  </div>

                  <div className={styles.propertyDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>🏠</span>
                      <div className={styles.detailContent}>
                        <div className={styles.detailLabel}>Address</div>
                        <div className={styles.detailValue}>
                          {property.address}
                        </div>
                      </div>
                    </div>

                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>👤</span>
                      <div className={styles.detailContent}>
                        <div className={styles.detailLabel}>Property Owner</div>
                        <div className={styles.detailValue}>
                          {property.owner}
                        </div>
                      </div>
                    </div>

                    <div className={styles.detailItem}>
                      <span className={styles.detailIcon}>📞</span>
                      <div className={styles.detailContent}>
                        <div className={styles.detailLabel}>Phone</div>
                        <div className={styles.detailValue}>
                          {property.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.propertyFinancials}>
                    <div className={styles.financialItem}>
                      <div className={styles.financialLabel}>
                        Rateable Value
                      </div>
                      <div className={styles.financialValue}>
                        GH₵ {property.rateableValue.toLocaleString()}
                      </div>
                    </div>
                    <div className={styles.financialItem}>
                      <div className={styles.financialLabel}>Current Bill</div>
                      <div className={styles.currentBill}>
                        GH₵ {property.currentBill.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className={styles.propertyActions}>
                    <button
                      className={styles.linkButton}
                      onClick={() => handleLinkProperty(property.id)}
                    >
                      <span className={styles.linkIcon}>🔗</span>
                      Link This Property
                    </button>
                    <button className={styles.viewButton}>
                      <span className={styles.viewIcon}>👁️</span>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className={styles.helpSection}>
        <div className={styles.helpContainer}>
          <h2 className={styles.sectionTitle}>
            Need Help Finding Your Property?
          </h2>
          <div className={styles.helpGrid}>
            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>📞</div>
              <h3 className={styles.helpTitle}>Contact Support</h3>
              <p className={styles.helpDescription}>
                Call our support team for assistance in locating your property
              </p>
              <div className={styles.helpContact}>0302 123 4567</div>
            </div>

            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>🏢</div>
              <h3 className={styles.helpTitle}>Visit Municipal Office</h3>
              <p className={styles.helpDescription}>
                Visit your local municipal assembly office for direct assistance
              </p>
              <div className={styles.helpContact}>Open Mon-Fri, 8AM-5PM</div>
            </div>

            <div className={styles.helpCard}>
              <div className={styles.helpIcon}>💬</div>
              <h3 className={styles.helpTitle}>Live Chat</h3>
              <p className={styles.helpDescription}>
                Get instant help through our in-app live chat support
              </p>
              <button className={styles.chatButton}>Start Chat</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindProperty;
