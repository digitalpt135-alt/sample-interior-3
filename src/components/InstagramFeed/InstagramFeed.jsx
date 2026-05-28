import "./InstagramFeed.css";

const instaImages = [
  "/images/insta1.jpg",
  "/images/insta2.jpg",
  "/images/insta3.jpg",
];

function InstagramFeed() {
  return (
    <section className="instagram-feed">
      <div className="section-heading">
        <span>Social Gallery</span>
        <h2>Instagram Feed</h2>
      </div>

      <div className="insta-grid">
        {instaImages.map((img, index) => (
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="insta-card"
            key={index}
          >
            <img src={img} alt="Instagram Interior" />
            <div className="insta-overlay">View on Instagram</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default InstagramFeed;