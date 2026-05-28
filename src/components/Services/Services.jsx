import { services } from "../../data/services";
import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <span>What We Offer</span>
        <h2>Our Services</h2>
      </div>

      <div className="service-grid">
        {services.map((item) => (
          <div className="service-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="service-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;