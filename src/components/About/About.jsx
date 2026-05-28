import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src="/images/about.jpg" alt="Interior Studio" />
      </div>

      <div className="about-content">
        <span>About Our Studio</span>
        <h2>We Turn Empty Spaces Into Beautiful Experiences</h2>
        <p>
          Urban Nest is a premium interior design studio focused on creating
          stylish, practical and timeless spaces. From concept planning to final
          execution, we manage every detail with care.
        </p>

        <div className="about-points">
          <p>✓ Custom design concepts</p>
          <p>✓ Premium material selection</p>
          <p>✓ End-to-end project execution</p>
        </div>

        <a href="#services">View Services</a>
      </div>
    </section>
  );
}

export default About;