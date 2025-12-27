"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.getElementById("header");
      const scrollTop = document.getElementById("scrollTop");

      if (window.scrollY > 100) {
        header?.classList.add("scrolled");
        scrollTop?.classList.add("visible");
      } else {
        header?.classList.remove("scrolled");
        scrollTop?.classList.remove("visible");
      }
    };

    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          // Close mobile menu after click
          setMenuOpen(false);
        }
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Add click listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div className="header-container">
        <div className="logo">RAUNIG DOBRIKA</div>
        <nav className="header-anchors">
          <a href="#home">HOME</a>
          <a href="#about">PROFILO</a>
          <a href="#experience">ESPERIENZA</a>
          <a href="#skills">COMPETENZE</a>
          <a href="#contact">CONTATTI</a>
        </nav>
        <div className="mobile-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div
        className={`menu-dropdown ${menuOpen ? "open" : ""}`}
        id="menuDropdown"
      >
        <a href="#home" onClick={toggleMenu}>
          HOME
        </a>
        <a href="#about" onClick={toggleMenu}>
          PROFILO
        </a>
        <a href="#experience" onClick={toggleMenu}>
          ESPERIENZA
        </a>
        <a href="#skills" onClick={toggleMenu}>
          COMPETENZE
        </a>
        <a href="#contact" onClick={toggleMenu}>
          CONTATTI
        </a>
      </div>
    </header>
  );
}
