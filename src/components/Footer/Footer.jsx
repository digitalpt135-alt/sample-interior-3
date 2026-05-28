import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <h2>Urban Nest</h2>
        <p>Premium interior design studio for modern homes and elegant spaces.</p>
      </div>

      <div className="footer-box">
        <h3>Quick Links</h3>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </div>

      <div className="footer-box">
        <h3>Services</h3>
        <a href="#services">Living Room Design</a>
        <a href="#services">Bedroom Interior</a>
        <a href="#services">Modular Kitchen</a>
        <a href="#services">Office Interior</a>
      </div>

      <div className="footer-box">
        <h3>Contact</h3>
        <p>+91 98765 43210</p>
        <p>hello@urbannest.com</p>
        <p>Delhi, India</p>
      </div>
    </footer>
  );
}

export default Footer;