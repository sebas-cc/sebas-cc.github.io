import { useState } from "react";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="site-header" role="banner">
      <a href="#home" className="logo" aria-label="Go to homepage">
        <span aria-hidden="true">💻</span> Sebastian Camacho
      </a>

      <button
        className="menu-toggle"
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        onClick={handleToggle}
      >
        <span className="visually-hidden">Menu</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <nav
        id="primary-navigation"
        className={`nav ${menuOpen ? "open" : ""}`}
        role="navigation"
      >
        <ul className="nav-links">
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
