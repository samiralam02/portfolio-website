/**
 * @copyright 2025 SamirAlam
 * @license Apache-2.0 
 */

import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (!activeBox.current || !lastActiveLink.current) return;

    activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
    activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
    activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
    activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
  };

  useEffect(() => {
    const firstActiveLink = document.querySelector(".nav-link.active");
    if (firstActiveLink) {
      lastActiveLink.current = firstActiveLink;
    }

    setTimeout(initActiveBox, 100);


    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  const activeCurrentLink = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    initActiveBox();
  };

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Certifications", link: "#certification", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
