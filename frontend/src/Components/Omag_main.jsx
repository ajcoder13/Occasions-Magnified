import React, { useRef, useState } from "react";
import Header from "./Header";
import BG02 from "../assets/BG-02.png";
import OMAGlogo from "../assets/1.png";
import instapost from "../assets/2.png";
import redBackground from "../assets/dark-red-brown-background.jpg";
import howitworks from '../assets/How it works.png';

function Omag_main() {
  const [sampleImages, setSampleImages] = useState([
    require("../assets/20.png"),
    require("../assets/21.png"),
    require("../assets/22.png"),
    // require("../assets/23.png"),
    require("../assets/24.png"),
    // require("../assets/25.png"),
    require("../assets/26.png"),
    // require("../assets/27.png"),
    // require("../assets/28.png"),
  ]);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    setSampleImages((prevImages) => {
      if (direction === "left") {
        const last = prevImages[prevImages.length - 1];
        return [last, ...prevImages.slice(0, -1)];
      } else {
        const first = prevImages[0];
        return [...prevImages.slice(1), first];
      }
    });

    scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.heroSection}>
        <img src={OMAGlogo} alt="omaglogo" style={styles.logo} />

        <div style={styles.leftSection}>
          <strong style={styles.strongText}>CUSTOMISED <br /> MAGAZINES</strong>
          <p style={styles.pText}>
            Turn your memories into a keepsake with our custom magazines,
            designed to celebrate every special moment!
          </p>
        </div>

        <div style={styles.rightSection}>
          <img src={instapost} alt="insta" style={styles.rightImage} />
        </div>

        <div style={styles.buttonContainer}>
          <button style={styles.shopButton}><span style={styles.buttonText}>SHOP MAGAZINES</span><span style={styles.arrowIcon}>&gt;</span></button>
          <button style={styles.shopButton}><span style={styles.buttonText}>VIEW SAMPLES</span><span style={styles.arrowIcon}>&gt;</span></button>
        </div>
      </div>

      <div style={styles.strip}>Why Choose O'Mag?</div>

      <div style={styles.video}></div>

      <section style={styles.samplesSection}>
        <h2 style={styles.samplesTitle}>SAMPLES</h2>
        <div style={styles.carouselWrapper}>
          <button onClick={() => scroll("left")} style={{ ...styles.arrow, ...styles.arrowLeft }}>
  <span style={styles.arrowShapeLeft}></span>
</button>
<div style={styles.samplesGallery} ref={scrollRef}>
            {sampleImages.map((src, i) => (
              <img key={i} src={src} alt={`Sample ${i + 1}`} style={styles.sampleBox} />
            ))}
          </div>
          <button onClick={() => scroll("right")} style={{ ...styles.arrow, ...styles.arrowRight }}>
  <span style={styles.arrowShapeRight}></span>
</button>
 </div>
      </section>
      <hr style={styles.redLine}/>
      <section style={styles.works}> 
        <h1 style={styles.title}>How it Works?</h1>
<img src={howitworks} alt="how" style={styles.howitworks} />


      </section>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    overflow: "hidden",
    backgroundImage: `url(${BG02})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
  },
  heroSection: { position: "relative", width: "100%", height: "100vh", display: "flex" },
  logo: { position: "absolute", top: "5vh", left: "10%", transform: "translateX(-50%)", width: "15vw" },
  leftSection: { position: "absolute", top: "55%", left: "5%", transform: "translateY(-50%)", fontFamily: "Open Sans", maxWidth: "40vw" },
  strongText: { color: "#450201", fontFamily: "Anton, Open Sans", fontSize: "5.5em", fontWeight: "200", marginTop: "10em" },
  pText: { fontFamily: "Open Sans", fontSize: "2em", fontStyle: "italic", marginTop: "1vh", lineHeight: "1.4" },
  rightSection: { position: "absolute", top: "40%", right: "5%", transform: "translateY(-50%)", width: "40vw" },
  rightImage: { height: "80vh", width: "auto", marginTop: "24%" },
  buttonContainer: { position: "absolute", bottom: "10vh", left: "10%", display: "flex", gap: "1vw" },
  shopButton: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5vw", backgroundColor: "#ffffff", color: "#4d0101", border: "solid 4px #4d0101", padding: "1.2vh 1vw", fontSize: "clamp(0.9rem, 1vw, 1.2rem)", fontFamily: "Poppins", fontWeight: "700", borderRadius: "50px", cursor: "pointer", transition: "all 0.3s ease" },
  buttonText: { fontSize: "clamp(0.9rem, 1vw, 1.2rem)", fontFamily: "Poppins", fontWeight: "700" },
  arrowIcon: { fontSize: "1.6rem", color: "#ffffff", width: "2.5rem", height: "2.5rem", fontWeight: "500", backgroundColor: "#4d0101", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  strip: { backgroundImage: `url(${redBackground})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", color: "#e5dcc8", padding: "3vh 5vw", fontSize: "3em", fontFamily: "Anton, open sans", textAlign: "center", width: "100%", minHeight: "10vh", display: "flex", alignItems: "center", justifyContent: "center" },
  video: { width: "100%", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" },
  samplesSection: { textAlign: "center" },
  samplesTitle: { fontSize: "2.5rem", fontWeight: "100", fontFamily: "Anton, open sans", color: "#4d0101", padding: "5vh" },
  carouselWrapper: { backgroundImage: `url(${redBackground})`, backgroundSize: "100% 150%", display: "flex", alignItems: "center", overflow: "hidden", padding: "0vh 0vw", height:"80vh" },
  samplesGallery: { display: "flex", overflowX: "auto", scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none", width: "100%" },
  sampleBox: { width: "28vw", height: "50vh", objectFit: "cover", borderRadius: "10px" },
  arrow: {
  background: "transparent",
  border: "none",
  width: "3rem",
  height: "3rem",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},

arrowLeft: {
  marginRight: "1vw",
},

arrowRight: {
  marginLeft: "1vw",
},


arrowShapeLeft: {
  width: "14px",
  height: "14px",
  borderLeft: "3px solid white",
  borderBottom: "3px solid white",
  transform: "rotate(45deg)",
},

arrowShapeRight: {
  width: "14px",
  height: "14px",
  borderLeft: "3px solid white",
  borderBottom: "3px solid white",
  transform: "rotate(-135deg)",
},

redLine: {
  border: "none",
  height: "3px",
  width: "95%",
  margin: "5vh auto",
  backgroundColor: "#4d0101", // deep red
  borderRadius: "2px",
},
title:{
  textAlign:"center",
  color:"#4d0101",
  fontSize: "2.5rem",
  fontFamily: "Anton, Open Sans",
  margin: "5vh 0",
  fontWeight: "500",
},howItWorks: {
  display: "block",
  maxWidth: "80vw",
  width: "100%",
  height: "auto",
  margin: "5vh auto",
}



};

export default Omag_main;
