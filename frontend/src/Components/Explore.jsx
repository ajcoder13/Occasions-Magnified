import React from "react";
import { useRef } from "react";
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import Header from "./Header";
import redBackground from "../assets/dark-red-brown-background.jpg";
import welcomeBoards from "../assets/6.png";
import invitation from "../assets/7.png";
import magazines from "../assets/8.png";
import caricatures from "../assets/9.png";
import customLogo from "../assets/10.png";
import weddingStationery from "../assets/11.png";
import arrow from "../assets/Arrow.png";

function Explore() {

 const cardRefs = useRef([]);
cardRefs.current = [];

useGSAP(() => {
  gsap.from(cardRefs.current, {
    y: 100,                // move from below
    opacity: 0,            // fade in
    scale: 0.9,            // slight scale up
    rotate: 3,             // subtle tilt
    duration: 1.2,
    stagger: 0.25,
    ease: "power3.out",
  });
}, []);




  return (
    <div style={styles.container}>
      <Header />
      <div style={{ width: "100%" }}>
        <p style={styles.para}>
          A celebration begins with the first glance.
          <br />
          Here's a glimpse into the custom designs we’ve lovingly created — each
          one tailored with purpose, meaning, and charm.
        </p>

        <div style={styles.gridContainer}>
          {items.map((item, index) => (
            <div key={index} ref={(el) => (cardRefs.current[index] = el)} className="card" style={styles.card}>
              <img src={item.image} alt="card visual" style={styles.image} />
              <img
                src={arrow}
                alt="arrow"
                style={{
                  ...styles.arrow,
                  transform: item.arrowRotate,
                  top: item.arrowTop,
                  left: item.arrowLeft,
                }}
              />
              <h2
                style={{
                  ...styles.title,
                  top: item.textTop,
                  left: item.textLeft,
                  transform: item.textRotate,
                }}
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Responsive CSS via <style> block */}
        <style>{`
          @media (max-width: 768px) {
            .card {
              width: 80vw !important;
            }
            .arrow {
              width: 12vw !important;
            }
            .title {
              font-size: 1.2em !important;
            }
          }
            .shop-btn:hover {
    transform: scale(1.04);
  }
  .shop-btn {
    transition: all 0.3s ease;
  }
  
        `}</style>
      </div>

      {/* Custom bottom button */}
      <div style={styles.buttonContainer}>
  <button className="shop-btn" style={styles.shopButton}>
    <span style={styles.buttonText}>SHOP CUSTOM DESIGNS</span>
    <span className="arrow-icon" style={styles.arrowIcon}>&gt;</span>
  </button>
</div>

    </div>
  );
}

const items = [
  {
    image: magazines,
    title: "MAGAZINES",
    arrowRotate: "rotate(0deg)",
    arrowTop: "30%",
    arrowLeft: "4%",
    textTop: "25%",
    textLeft: "-4%",
    textRotate: "rotate(-10deg)",
  },
  {
    image: invitation,
    title: "INVITATION",
    arrowRotate: "rotate(170deg)",
    arrowTop: "35%",
    arrowLeft: "64%",
    textTop: "57%",
    textLeft: "77%",
    textRotate: "rotate(-10deg)",
  },
  {
    image: welcomeBoards,
    title: (
      <>
        WELCOME
        <br />
        BOARDS
      </>
    ),
    arrowRotate: "rotate(0deg)",
    arrowTop: "40%",
    arrowLeft: "4%",
    textTop: "22%",
    textLeft: "3%",
    textRotate: "rotate(-10deg)",
  },
  {
    image: weddingStationery,
    title: (
      <>
        WEDDING
        <br />
        STATIONERY
      </>
    ),
    arrowRotate: "rotate(170deg)",
    arrowTop: "35%",
    arrowLeft: "64%",
    textTop: "57%",
    textLeft: "77%",
    textRotate: "rotate(-10deg)",
  },
  {
    image: customLogo,
    title: (
      <>
        CUSTOM
        <br />
        LOGO
      </>
    ),
    arrowRotate: "rotate(0deg)",
    arrowTop: "40%",
    arrowLeft: "4%",
    textTop: "22%",
    textLeft: "7%",
    textRotate: "rotate(-10deg)",
  },
  {
    image: caricatures,
    title: "CARICATURES",
    arrowRotate: "rotate(170deg)",
    arrowTop: "25%",
    arrowLeft: "64%",
    textTop: "48%",
    textLeft: "75%",
    textRotate: "rotate(-10deg)",
  },
];

const styles = {
  container: {
    position: "relative",
    backgroundImage: `url(${redBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
    height: "100vh",
    width: "100vw",
    objectFit: "cover",
    display: "flex",
    flexDirection: "column",
  },
  para: {
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontSize: "clamp(1.2rem, 1.2vw, 2rem)",
    textAlign: "center",
    margin: "13vh 5vw 2vh 5vw",
    color: "#e5dcc8",
  },
  gridContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2vw",
  },
  card: {
    position: "relative",
    display: "inline-block",
    width: "25vw",
    minWidth: "280px",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  arrow: {
    position: "absolute",
    width: "8vw",
    height: "auto",
  },
  title: {
    position: "absolute",
    fontFamily: "Gochi Hand",
    fontSize: "clamp(1rem, 1.5vw, 1.7rem)",
    color: "#e5dcc8",
    fontWeight: "100",
    textAlign: "center",
  },
  buttonContainer: {
  position: "fixed",
  bottom: "3vh",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 50,
},

shopButton: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1.5vw",
  backgroundColor: "#ffffff",
  color: "#4d0101",
  border: "none",
  padding: "1.2vh 1vw",
  fontSize: "clamp(0.9rem, 1vw, 1.2rem)",
  fontFamily: "Poppins",
  fontWeight: "700",
  borderRadius: "50px",
  cursor: "pointer",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
},

buttonText: {
  fontSize: "clamp(0.9rem, 1vw, 1.2rem)",
  fontFamily: "Poppins",
  fontWeight: "700",
},

arrowIcon: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6rem",
  color: "#ffffff",
  width: "2.5rem",
  height: "2.5rem",
  fontWeight:"500",
  backgroundColor: "#4d0101",
  borderRadius: "50%",
},


};

export default Explore;
