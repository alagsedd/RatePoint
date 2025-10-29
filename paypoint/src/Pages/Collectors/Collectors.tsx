import styles from './Collectors.module.css';
import { useState } from 'react';

interface Collector {
  id: string;
  name: string;
  avatar: string;
  municipality: string;
  zone: string;
  properties: number;
  collectionRate: number;
  phone: string;
  status: 'active' | 'inactive' | 'on-duty';
  lastActive: string;
}

const Collectors = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'on-duty'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const collectors: Collector[] = [
    {
      id: 'COL-001',
      name: 'Kwame Asante',
      avatar: '👨‍💼',
      municipality: 'Accra Metropolitan',
      zone: 'Central Business District',
      properties: 156,
      collectionRate: 94,
      phone: '+233 20 123 4567',
      status: 'on-duty',
      lastActive: '2 hours ago'
    },
    {
      id: 'COL-002',
      name: 'Ama Serwaa',
      avatar: '👩‍💼',
      municipality: 'Kumasi Metropolitan',
      zone: 'Adum Central',
      properties: 203,
      collectionRate: 89,
      phone: '+233 24 765 4321',
      status: 'active',
      lastActive: '1 day ago'
    },
    {
      id: 'COL-003',
      name: 'Kofi Mensah',
      avatar: '👨‍💼',
      municipality: 'Tema Metropolitan',
      zone: 'Community 25',
      properties: 98,
      collectionRate: 96,
      phone: '+233 27 890 1234',
      status: 'on-duty',
      lastActive: '30 minutes ago'
    },
    {
      id: 'COL-004',
      name: 'Esi Nyarko',
      avatar: '👩‍💼',
      municipality: 'Takoradi Metropolitan',
      zone: 'Harbor Area',
      properties: 167,
      collectionRate: 91,
      phone: '+233 54 321 0987',
      status: 'active',
      lastActive: '3 hours ago'
    },
    {
      id: 'COL-005',
      name: 'Yaw Boateng',
      avatar: '👨‍💼',
      municipality: 'Tamale Metropolitan',
      zone: 'Central Market',
      properties: 134,
      collectionRate: 87,
      phone: '+233 50 456 7890',
      status: 'inactive',
      lastActive: '5 days ago'
    }
  ];

  const filteredCollectors = collectors.filter(collector => {
    const matchesSearch = collector.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         collector.municipality.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         collector.zone.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') return matchesSearch;
    return matchesSearch && collector.status === activeTab;
  });

  const stats = {
    total: collectors.length,
    active: collectors.filter(c => c.status === 'active' || c.status === 'on-duty').length,
    onDuty: collectors.filter(c => c.status === 'on-duty').length,
    avgCollectionRate: Math.round(collectors.reduce((acc, curr) => acc + curr.collectionRate, 0) / collectors.length)
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>👥</span>
              Rate Collector Management
            </div>
            <h1 className={styles.heroTitle}>
              Field <span className={styles.highlight}>Collectors</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Manage and monitor our dedicated team of rate collectors across all municipalities. 
              Track performance, assign zones, and ensure efficient property rate collection.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardAvatar}>📊</div>
                <div>
                  <div className={styles.userName}>Collector Network</div>
                  <div className={styles.userRole}>Ghana Municipal Platform</div>
                </div>
              </div>
              <div className={styles.cardStats}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{stats.total}</div>
                  <div className={styles.statLabel}>Total Collectors</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>{stats.onDuty}</div>
                  <div className={styles.statLabel}>On Duty</div>
                </div>
              </div>
            </div>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>👥</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stats.total}</div>
              <div className={styles.statLabel}>Total Collectors</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>✅</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stats.active}</div>
              <div className={styles.statLabel}>Active Collectors</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📱</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stats.onDuty}</div>
              <div className={styles.statLabel}>On Duty Now</div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📈</div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>{stats.avgCollectionRate}%</div>
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
                placeholder="Search collectors by name, municipality, or zone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
            <button className={styles.addButton}>
              <span className={styles.addIcon}>+</span>
              Add New Collector
            </button>
          </div>

          <div className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Collectors
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'active' ? styles.active : ''}`}
              onClick={() => setActiveTab('active')}
            >
              Active
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'on-duty' ? styles.active : ''}`}
              onClick={() => setActiveTab('on-duty')}
            >
              On Duty
            </button>
          </div>
        </div>
      </section>

      {/* Collectors Grid */}
      <section className={styles.collectorsSection}>
        <div className={styles.collectorsContainer}>
          <div className={styles.collectorsGrid}>
            {filteredCollectors.map((collector) => (
              <div key={collector.id} className={styles.collectorCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.collectorAvatar}>{collector.avatar}</div>
                  <div className={styles.collectorInfo}>
                    <h3 className={styles.collectorName}>{collector.name}</h3>
                    <p className={styles.collectorId}>{collector.id}</p>
                  </div>
                  <div className={`${styles.status} ${styles[collector.status]}`}>
                    {collector.status === 'on-duty' ? 'On Duty' : collector.status}
                  </div>
                </div>

                <div className={styles.collectorDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>🏢</span>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Municipality</div>
                      <div className={styles.detailValue}>{collector.municipality}</div>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📍</span>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Zone</div>
                      <div className={styles.detailValue}>{collector.zone}</div>
                    </div>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}>📞</span>
                    <div className={styles.detailContent}>
                      <div className={styles.detailLabel}>Contact</div>
                      <div className={styles.detailValue}>{collector.phone}</div>
                    </div>
                  </div>
                </div>

                <div className={styles.performanceStats}>
                  <div className={styles.performanceItem}>
                    <div className={styles.performanceLabel}>Properties</div>
                    <div className={styles.performanceValue}>{collector.properties}</div>
                  </div>
                  <div className={styles.performanceItem}>
                    <div className={styles.performanceLabel}>Collection Rate</div>
                    <div className={styles.performanceValue}>
                      <span className={styles.rateValue}>{collector.collectionRate}%</span>
                      <div className={styles.rateBar}>
                        <div 
                          className={styles.rateFill} 
                          style={{ width: `${collector.collectionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.lastActive}>
                    Last active: {collector.lastActive}
                  </div>
                  <div className={styles.actionButtons}>
                    <button className={styles.messageButton}>
                      <span>💬</span>
                      Message
                    </button>
                    <button className={styles.viewButton}>
                      <span>👁️</span>
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCollectors.length === 0 && (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>👥</div>
              <h3 className={styles.emptyTitle}>No collectors found</h3>
              <p className={styles.emptyDescription}>
                Try adjusting your search criteria or add a new collector to get started.
              </p>
              <button className={styles.emptyAction}>
                Add New Collector
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className={styles.actionsSection}>
        <div className={styles.actionsContainer}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.actionsGrid}>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>📋</div>
              <div className={styles.actionContent}>
                <h3 className={styles.actionTitle}>Assign Zones</h3>
                <p className={styles.actionDescription}>Assign collection zones to available collectors</p>
              </div>
            </button>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>📊</div>
              <div className={styles.actionContent}>
                <h3 className={styles.actionTitle}>Performance Report</h3>
                <p className={styles.actionDescription}>Generate collector performance reports</p>
              </div>
            </button>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>🔄</div>
              <div className={styles.actionContent}>
                <h3 className={styles.actionTitle}>Update Status</h3>
                <p className={styles.actionDescription}>Update collector availability and status</p>
              </div>
            </button>
            <button className={styles.actionCard}>
              <div className={styles.actionIcon}>📱</div>
              <div className={styles.actionContent}>
                <h3 className={styles.actionTitle}>Bulk Message</h3>
                <p className={styles.actionDescription}>Send messages to multiple collectors</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collectors;