import { useState } from "react";
import "./MobileNav.css"

const navLinks = [
  { href: "#Inicio", label: "Home" },
  { href: "#Sobre", label: "Sobre Nós" },
  { href: "#Equipe", label: "Nossa Equipe" },
  { href: "#Serviços", label: "Serviços" },
  { href: "#Portifolio", label: "BicoDigital" },
  { href: "#Contact", label: "Contact" },
]

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mobile-nav-container">
      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={isOpen ? "hamburger-icon open" : "hamburger-icon"}></span>
      </button>

      <nav className={`mobile-nav-menu ${isOpen ? "open" : ""}`}>
        {navLinks.map((obj) => (
          <a
            className="mobile-nav-link"
            key={obj.href}
            href={obj.href}
            onClick={handleNavClick}
          >
            {obj.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default MobileNav
