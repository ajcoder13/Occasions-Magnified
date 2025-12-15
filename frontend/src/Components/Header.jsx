import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import redBackground from "../assets/dark-red-brown-background.jpg";
import Logo from "../assets/Logo_Occasions Magnified.png";
import LogoWhite from "../assets/Logo Occasions Magnified.png";

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate(); // 2. Create navigate hook
  const isExplore = location.pathname === '/explore';
  const isOmag = location.pathname === '/omag';
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  // 3. ADD THIS: Function to handle scrolling
  const handleScrollToFounder = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If we are already on Home, just find the ID and scroll
      const section = document.getElementById("founder");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we are NOT on Home, go to home and tell it to scroll to 'founder'
      navigate("/", { state: { targetId: "founder" } });
    }
  };

  const styles = {
    // ... (Your existing styles remain fine)
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2em 0em",
      backgroundImage: isExplore || header || isOmag ? `url(${redBackground})` : "none",
      transition: "background-image 0.7s ease, box-shadow 0.3s ease",
      boxShadow: header ? "0 2px 8px rgba(0,0,0,0.05)" : "none",
      zIndex: 1000,
    },
    logo: {
      position: "absolute",
      top: "2vh",
      left: "2vh",
      width: "10vw",
      height: "auto",
    },
    nav: {
      display: "flex",
      gap: "2em",
      width: "100%",
      justifyContent: "flex-end",
      marginRight: "1.5em",
      alignItems: "center",
    },
    navLink: {
      color: isExplore || header || isOmag ? "#e5dcc8" : "#450201",
      textDecoration: "none",
      fontSize: "1.2em",
      letterSpacing: "0.05em",
      cursor: "pointer", // Added cursor pointer
    },
  };

  return (
    <header style={{ ...styles.header, ...(props && props.style) }}>
      <img src={isExplore || header || isOmag ? LogoWhite : Logo} alt="Logo" style={styles.logo} />
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>HOME</Link>

        {/* 4. UPDATE THIS LINK: Use the handler instead of to="/aboutus" */}
        <Link to="/" onClick={handleScrollToFounder} style={styles.navLink}>ABOUT US</Link>

        <Link to="/service" style={styles.navLink}>SERVICES</Link>
        <Link to="/portfolio" style={styles.navLink}>PORTFOLIO</Link>
        <Link to="/omag" style={styles.navLink}>O'MAG</Link>
        <Link to="/testimonial" style={styles.navLink}>TESTIMONIAL</Link>
        <Link to="/contact" style={styles.navLink}>CONTACT US</Link>
      </nav>
    </header>
  );
}

export default Header;