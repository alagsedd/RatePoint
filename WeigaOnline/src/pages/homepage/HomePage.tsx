import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import img1 from "../../assets/QueenPics/img1.jpg";
import img2 from "../../assets/QueenPics/img2.jpg";
import img3 from "../../assets/QueenPics/img3.jpg";
import img4 from "../../assets/QueenPics/img4.jpg";
import img5 from "../../assets/QueenPics/img5.jpg";
import img6 from "../../assets/QueenPics/img6.jpg";

const HomePage = () => {
  // Sample data - replace with actual content
  const latestNews = [
    {
      id: 1,
      title: "Annual Cultural Festival 2024",
      date: "2024-03-15",
      excerpt:
        "Join us for the celebration of our rich cultural heritage with traditional dances, music, and ceremonies that showcase our vibrant traditions.",
      image: img3,
    },
    {
      id: 2,
      title: "Queen Mother Community Address",
      date: "2024-03-10",
      excerpt:
        "Her Majesty addresses the community on development projects and new initiatives for youth empowerment and education.",
      image: img2,
    },
    {
      id: 3,
      title: "Youth Empowerment Program",
      date: "2024-03-05",
      excerpt:
        "New initiatives to support youth education, skills development, and entrepreneurship in our community.",
      image: img4,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Traditional Council Meeting",
      date: "2024-03-20",
      location: "Palace Grounds",
    },
    {
      id: 2,
      title: "Cultural Dance Performance",
      date: "2024-03-25",
      location: "Community Center",
    },
    {
      id: 3,
      title: "Farmers Market",
      date: "2024-03-30",
      location: "Main Square",
    },
  ];

  const galleryImages = [img5, img6, img3, img4];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to Weiga Traditional Area
          </h1>
          <p className={styles.heroSubtitle}>
            Preserving our heritage, building our future under the guidance of
            our Queen Mother
          </p>
          <div className={styles.heroButtons}>
            <Link to="/about" className={styles.primaryButton}>
              Learn More
            </Link>
            <Link to="/contact" className={styles.secondaryButton}>
              Get Involved
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={img1}
            alt="Weiga Traditional Area - Queen Mother and Community"
            className={styles.heroImg}
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2>About Weiga Traditional Area</h2>
            <p>
              The Weiga Traditional Area is a vibrant community rich in culture,
              tradition, and history. Under the esteemed leadership of our Queen
              Mother, we continue to preserve our heritage while embracing
              progress and development.
            </p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <h3>50+</h3>
                <p>Years of Tradition</p>
              </div>
              <div className={styles.statItem}>
                <h3>10K+</h3>
                <p>Community Members</p>
              </div>
              <div className={styles.statItem}>
                <h3>15+</h3>
                <p>Annual Festivals</p>
              </div>
            </div>
          </div>
          <div className={styles.introImage}>
            <img
              src={img2}
              alt="Weiga Community Gathering"
              className={styles.introImg}
            />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className={styles.newsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Latest News & Announcements</h2>
            <Link to="/news" className={styles.viewAllLink}>
              View All News →
            </Link>
          </div>
          <div className={styles.newsGrid}>
            {latestNews.map((news) => (
              <article key={news.id} className={styles.newsCard}>
                <div className={styles.newsImage}>
                  <img
                    src={news.image}
                    alt={news.title}
                    className={styles.newsImg}
                  />
                </div>
                <div className={styles.newsContent}>
                  <span className={styles.newsDate}>
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <Link to={`/news/${news.id}`} className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className={styles.eventsSection}>
        <div className={styles.container}>
          <h2>Upcoming Events</h2>
          <div className={styles.eventsList}>
            {upcomingEvents.map((event) => (
              <div key={event.id} className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>
                    {new Date(event.date).getDate()}
                  </span>
                  <span className={styles.eventMonth}>
                    {new Date(event.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                </div>
                <div className={styles.eventDetails}>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                </div>
                <Link to="/events" className={styles.eventLink}>
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Cultural Gallery</h2>
            <Link to="/gallery" className={styles.viewAllLink}>
              View Gallery →
            </Link>
          </div>
          <div className={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <img
                  src={image}
                  alt={`Weiga Cultural Gallery ${index + 1}`}
                  className={styles.galleryImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Stay Connected with Our Community</h2>
            <p>
              Subscribe to our newsletter to receive updates on events,
              announcements, and community news directly from the Queen Mother's
              office.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryButton}>
                Contact Us
              </Link>
              <button className={styles.secondaryButton}>
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
