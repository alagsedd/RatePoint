import { useState } from "react";
import styles from "./Gallery.module.css";
import img1 from "../../assets/QueenPics/img1.jpg";
import img2 from "../../assets/QueenPics/img2.jpg";
import img3 from "../../assets/QueenPics/img3.jpg";
import img4 from "../../assets/QueenPics/img4.jpg";
import img5 from "../../assets/QueenPics/img5.jpg";
import img6 from "../../assets/QueenPics/img6.jpg";

// Define types for our data
interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
  category?: string; // Optional for category-specific arrays
}

interface GalleryData {
  all: GalleryImage[];
  leadership: GalleryImage[];
  community: GalleryImage[];
  festivals: GalleryImage[];
  ceremonies: GalleryImage[];
  development: GalleryImage[];
}

type CategoryKey = keyof GalleryData;

interface Category {
  id: CategoryKey;
  name: string;
  count: number;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Gallery data organized by categories with proper typing
  const galleryData: GalleryData = {
    all: [
      {
        id: 1,
        src: img1,
        title: "Queen Mother Official Portrait",
        category: "leadership",
        description: "Her Royal Majesty in traditional regalia",
      },
      {
        id: 2,
        src: img2,
        title: "Community Gathering",
        category: "community",
        description: "Traditional council meeting with elders",
      },
      {
        id: 3,
        src: img3,
        title: "Cultural Festival",
        category: "festivals",
        description: "Annual cultural celebration with dancing",
      },
      {
        id: 4,
        src: img4,
        title: "Youth Empowerment",
        category: "development",
        description: "Queen Mother with youth leaders",
      },
      {
        id: 5,
        src: img5,
        title: "Traditional Ceremony",
        category: "ceremonies",
        description: "Royal durbar and traditional rites",
      },
      {
        id: 6,
        src: img6,
        title: "Community Development",
        category: "development",
        description: "Infrastructure projects inauguration",
      },
      {
        id: 7,
        src: img3,
        title: "Traditional Dance",
        category: "festivals",
        description: "Cultural performance during festival",
      },
      {
        id: 8,
        src: img4,
        title: "Educational Outreach",
        category: "development",
        description: "School visit and mentorship program",
      },
      {
        id: 9,
        src: img1,
        title: "Royal Procession",
        category: "ceremonies",
        description: "Traditional royal procession",
      },
      {
        id: 10,
        src: img2,
        title: "Elders Council",
        category: "leadership",
        description: "Meeting of traditional elders",
      },
      {
        id: 11,
        src: img5,
        title: "Harvest Celebration",
        category: "festivals",
        description: "Traditional harvest festival activities",
      },
      {
        id: 12,
        src: img6,
        title: "Community Project",
        category: "development",
        description: "Launch of new community initiative",
      },
    ],
    leadership: [
      {
        id: 1,
        src: img1,
        title: "Queen Mother Official Portrait",
        description: "Her Royal Majesty in traditional regalia",
      },
      {
        id: 2,
        src: img2,
        title: "Elders Council",
        description: "Meeting of traditional elders",
      },
      {
        id: 10,
        src: img2,
        title: "Traditional Leadership",
        description: "Queen Mother with council members",
      },
    ],
    community: [
      {
        id: 2,
        src: img2,
        title: "Community Gathering",
        description: "Traditional council meeting with elders",
      },
      {
        id: 6,
        src: img6,
        title: "Community Meeting",
        description: "Town hall gathering",
      },
    ],
    festivals: [
      {
        id: 3,
        src: img3,
        title: "Cultural Festival",
        description: "Annual cultural celebration with dancing",
      },
      {
        id: 7,
        src: img3,
        title: "Traditional Dance",
        description: "Cultural performance during festival",
      },
      {
        id: 11,
        src: img5,
        title: "Harvest Celebration",
        description: "Traditional harvest festival activities",
      },
    ],
    ceremonies: [
      {
        id: 5,
        src: img5,
        title: "Traditional Ceremony",
        description: "Royal durbar and traditional rites",
      },
      {
        id: 9,
        src: img1,
        title: "Royal Procession",
        description: "Traditional royal procession",
      },
    ],
    development: [
      {
        id: 4,
        src: img4,
        title: "Youth Empowerment",
        description: "Queen Mother with youth leaders",
      },
      {
        id: 6,
        src: img6,
        title: "Community Development",
        description: "Infrastructure projects inauguration",
      },
      {
        id: 8,
        src: img4,
        title: "Educational Outreach",
        description: "School visit and mentorship program",
      },
      {
        id: 12,
        src: img6,
        title: "Community Project",
        description: "Launch of new community initiative",
      },
    ],
  };

  const categories: Category[] = [
    { id: "all", name: "All Photos", count: galleryData.all.length },
    {
      id: "leadership",
      name: "Leadership",
      count: galleryData.leadership.length,
    },
    { id: "community", name: "Community", count: galleryData.community.length },
    { id: "festivals", name: "Festivals", count: galleryData.festivals.length },
    {
      id: "ceremonies",
      name: "Ceremonies",
      count: galleryData.ceremonies.length,
    },
    {
      id: "development",
      name: "Development",
      count: galleryData.development.length,
    },
  ];

  const currentImages = galleryData[selectedCategory];

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = currentImages.findIndex(
      (img: GalleryImage) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % currentImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
    }

    setSelectedImage(currentImages[newIndex]);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "ArrowLeft") navigateImage("prev");
  };

  return (
    <div className={styles.galleryPage} onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cultural Gallery</h1>
          <p className={styles.heroSubtitle}>
            Explore the rich heritage, traditions, and community life of the
            Weiga Traditional Area
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filterTabs}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterTab} ${
                  selectedCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className={styles.count}>({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryGrid}>
            {currentImages.map((image: GalleryImage) => (
              <div
                key={image.id}
                className={styles.galleryItem}
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={styles.galleryImage}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.imageInfo}>
                    <h3 className={styles.imageTitle}>{image.title}</h3>
                    <p className={styles.imageDescription}>
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {currentImages.length === 0 && (
            <div className={styles.emptyState}>
              <h3>No images found in this category</h3>
              <p>Please select another category to view photos</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>

            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={() => navigateImage("prev")}
            >
              ‹
            </button>

            <div className={styles.modalImageContainer}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className={styles.modalImage}
              />
              <div className={styles.modalInfo}>
                <h2 className={styles.modalTitle}>{selectedImage.title}</h2>
                <p className={styles.modalDescription}>
                  {selectedImage.description}
                </p>
                <div className={styles.imageCounter}>
                  {currentImages.findIndex(
                    (img: GalleryImage) => img.id === selectedImage.id
                  ) + 1}{" "}
                  of {currentImages.length}
                </div>
              </div>
            </div>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={() => navigateImage("next")}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Share Your Weiga Memories</h2>
            <p>
              Have photos of community events, festivals, or cultural
              activities? Contribute to our growing gallery and help preserve
              our heritage.
            </p>
            <button className={styles.ctaButton}>
              Contact Us to Contribute
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
