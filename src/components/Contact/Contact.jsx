import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <span>Get In Touch</span>
        <h2>Ready To Design Your Dream Space?</h2>
        <p>
          Share your requirements with us and our team will help you plan a
          beautiful, functional and premium interior.
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
        <select>
          <option>Select Service</option>
          <option>Living Room Design</option>
          <option>Bedroom Interior</option>
          <option>Modular Kitchen</option>
          <option>Office Interior</option>
        </select>
        <textarea placeholder="Tell us about your project"></textarea>
        <button type="submit">Send Enquiry</button>
      </form>
    </section>
  );
}

export default Contact;