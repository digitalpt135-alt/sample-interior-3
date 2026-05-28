import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-heading">
        <span>Testimonials</span>
        <h2>What Clients Say</h2>
      </div>

      <div className="testimonial-slider">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div className="testimonial-card" key={index}>
              <h3>★★★★★</h3>
              <p>{item.review}</p>
              <span>- {item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;