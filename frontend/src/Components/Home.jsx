import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import bannerImage from "../assets/Banner copy.jpg";
import Header from "./Header";
import OMAG from "./OMAG";
import OurServices from './OurServices';
import serviceVideo from '../assets/Services.mp4';
import Background from "../assets/Background.jpg";
import Founder from "./Founder";
import redBackground from "../assets/dark-red-brown-background.jpg";
import BG01 from "../assets/BG-01.png";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hover, setHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (location.state && location.state.targetId) {
      const section = document.getElementById(location.state.targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      // Optional: Clear state to prevent scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  const HoverData = (
    <div>
      <span >YOUR DREAM DESIGN,</span><br />
      <span >JUST A CLICK AWAY</span><br />
      <div style={{ fontSize: "1.2rem", fontFamily: "Poppins", fontStyle: "italic", lineHeight: "1.2", marginTop: "1em", }}>
        <div>Browse through our past creations</div>
        <div>and place your custom order easily.</div>
      </div>
    </div>
  );

  const onHover = (e) => {
    e.preventDefault();
    setHover(true); // turn true
    console.log("hovered");
  };

  const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setHover(false);
  };
  const handleNavigate = () => {
    navigate("/explore");
  };


  return (
    <div style={styles.container}>
      <Header />
      <img src={bannerImage} alt="Banner" style={styles.image} />

      <div style={styles.textContainer}>
        <div style={styles.crafting}>
          Crafting Memories through</div>
        <span style={styles.elegantDesigns}>Elegant Designs</span>

        <button
          style={{
            ...styles.explore,
            ...(isHovered ? styles.exploreHover : {}),
          }}
          onClick={handleNavigate}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Explore Our Services
        </button>

        <hr style={styles.hr} />
      </div>
      <section style={styles.omagSection}>
        <OMAG />
      </section>
      {/* <div style={styles.blankSpace}/> */}
      <OurServices />

      <div
        style={styles.videoContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          style={{ ...styles.video, opacity: hover ? 0.4 : 1 }}
          onMouseEnter={(e) => onHover(e)}
          onMouseLeave={(e) => onHoverOver(e)}
          src={serviceVideo}
          autoPlay
          loop
          playsInline
          muted
        />{hover && <p style={styles.overlayText}>{HoverData}</p>}
      </div>

      <OurServices />
      <section style={styles.founderSection}>
        <Founder />
      </section>
      <div style={styles.testimonial}>
        <div style={styles.line} > What Our Clients Say .... </div>
        <div style={styles.white}>  </div>
      </div>
    </div>

  );
}

const styles = {
  container: {
    position: "relative",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    minHeight: "100vh", // Ensures container height matches viewport
  },
  image: {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    display: "block",
    backgroundRepeat: "no-repeat",
  },
  textContainer: {
    position: "absolute",
    top: "22vh",
    left: "72vw",
    width: "35vw",
    height: "auto",
    transform: "translate(-50%, 0)",
    color: "#450201",
    fontSize: "2em",
    textAlign: "left",
    letterSpacing: "0.05em",
    lineHeight: "1.8em",
    zIndex: 2,
  },
  crafting: {
    fontFamily: "Abril Fatface",
    fontSize: "1.3em",
    color: "#450201",
  },
  elegantDesigns: {
    fontSize: "1.8em",
    fontFamily: "Abril Fatface",
  },
  explore: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.7em",
    padding: "0.4em 1em",
    color: "#450201",
    backgroundColor: "transparent",
    border: "2px solid #450201",
    borderBottom: "0",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
    marginTop: "1em",
  },
  exploreHover: {
    backgroundColor: "#450201",
    color: "#ffffff",
  },
  hr: {
    width: "150%",
    marginTop: "0em",
    border: "1px solid #450201",
  },
  omagSection: {
    height: "110vh",
    width: "100vw",
    scrollSnapAlign: "start",
  },
  blankSpace: {
    height: "10vh",
    width: "100vw",
    backgroundImage: `url(${Background})`,
  },
  videoContainer: {
    width: '100vw',
    height: '73vh',
    overflow: 'hidden',
    backgroundColor: '#000',
    position: 'relative', // to position overlay text correctly
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease',// to position overlay text correctly
  },

  overlayText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: "center",
    fontWeight: "500",
    color: '#ffffff',
    wordSpacing: "0.1em",
    letterSpacing: "0.05em",
    fontSize: '3.5em',
    fontFamily: 'Anton, sans-serif',
    transition: 'opacity 0.5s ease',
    zIndex: 1,
    pointerEvents: 'none', // prevent blocking video events
  },
  founderSection: {
    height: "110vh",
    width: "100vw",
    // light cream shade
  },
  testimonial: {
    height: "100vh",
    width: "100vw",
  },
  line: {
    width: "100vw",
    height: "20vh",                      // how much space you want to show
    backgroundImage: `url(${redBackground})`,
    backgroundPosition: "bottom",
    backgroundSize: "100% 1000%",        // stretches image 10x vertically
    backgroundRepeat: "no-repeat",
    color: "#e5dcc8",
    fontSize: "3em",
    letterSpacing: "0.3em",
    fontFamily: "open sans",
    fontStyle: "italic",
    padding: "12vh 0vw 0vw 3vw",
  },
  white: {
    display: "block",
    backgroundImage: `url(${BG01})`,
    height: "100vh",
  }

};

export default Home;
