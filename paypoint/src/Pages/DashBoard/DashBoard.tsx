import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Property Owner Dashboard</h1>
        <p>Welcome to your RatePoint dashboard</p>
      </div>
      
      <div className={styles.content}>
        <div className={styles.welcomeCard}>
          <h2>Welcome, Kwame Mensah!</h2>
          <p>Property Owner</p>
          <p>Phone: +233 XX XXX XXXX</p>
        </div>
        
        <div className={styles.quickActions}>
          <h3>Quick Actions</h3>
          <div className={styles.actionGrid}>
            <button className={styles.actionButton}>
              <span>🏠</span>
              Find Property
            </button>
            <button className={styles.actionButton}>
              <span>📋</span>
              My Properties
            </button>
            <button className={styles.actionButton}>
              <span>💰</span>
              Pay Bills
            </button>
            <button className={styles.actionButton}>
              <span>📊</span>
              History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;