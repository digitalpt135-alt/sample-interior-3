import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>Urban Nest</h2>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="nav-btn"
        href="https://wa.me/919876543210"
        target="_blank"
      >
        Book Consultation
      </a>
    </header>
  );
}

export default Navbar;