import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import BG02 from "../assets/BG-02.png";
import OMAGlogo from "../assets/1.png";
import instapost from "../assets/2.png";
import redBackground from "../assets/dark-red-brown-background.jpg";
import howitworksImage from '../assets/How it works.png'; // Renamed to avoid confusion with style
import BG01 from "../assets/BG-01.png"; // Assuming you have this light background asset from Home.jsx

function Omag_main() {
  const [sampleImages, setSampleImages] = useState([
    require("../assets/20.png"),
    require("../assets/21.png"),
    require("../assets/22.png"),
    require("../assets/24.png"),
    require("../assets/26.png"),
  ]);

  // --- Carousel Logic ---
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const handleShopClick = () => {
    navigate('/shopmagazines');
  };
  // --- FAQ Logic ---
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is the process after I order?", answer: "Once you place an order, our design team will contact you within 24 hours to collect your photos and stories. We then create a first draft for your review." },
    { question: "How many photos do I need?", answer: "For a standard 12-page magazine, we recommend providing between 30 to 50 high-quality photos to ensure the best layout." },
    { question: "Can I customize the design?", answer: "Absolutely! While we have beautiful templates, every magazine is uniquely tailored to fit your specific occasion and aesthetic preferences." },
    { question: "What are the payment details?", answer: "We accept all major credit cards, UPI, and net banking. Payment is required upfront to begin the customization process." },
  ];

  return (
    <div style={styles.container}>
      <Header />

      {/* --- HERO SECTION --- */}
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
          <button style={styles.shopButton} onClick={handleShopClick}><span style={styles.buttonText}>SHOP MAGAZINES</span><span style={styles.arrowIcon}>&gt;</span></button>
          <button style={styles.shopButton}><span style={styles.buttonText}>VIEW SAMPLES</span><span style={styles.arrowIcon}>&gt;</span></button>
        </div>
      </div>

      {/* --- WHY CHOOSE STRIP --- */}
      <div style={styles.strip}>Why Choose O'Mag?</div>

      {/* --- VIDEO PLACEHOLDER --- */}
      <div style={styles.videoContainer}>
        <div style={styles.videoPlaceholder}>
          <h2 style={{ color: '#fff' }}>Video Placeholder: Woman with Pencil</h2>
        </div>
      </div>

      {/* --- SAMPLES CAROUSEL --- */}
      <section style={styles.samplesSection}>
        <h2 style={styles.sectionTitle}>SAMPLES</h2>
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

      <hr style={styles.redLine} />

      {/* --- HOW IT WORKS --- */}
      <section style={styles.works}>
        <h1 style={styles.sectionTitle}>How it Works?</h1>
        {/* FIXED: Style name mismatch corrected */}
        <img src={howitworksImage} alt="How it works steps" style={styles.howItWorksImage} />
      </section>

      {/* --- TESTIMONIALS SECTION (NEW) --- */}
      <section style={styles.testimonialSection}>
        <div style={styles.testimonialHeader}>
          What Our Clients Say ....
        </div>
        <div style={styles.testimonialContent}>
          <div style={styles.quoteBox}>
            <p style={styles.quoteText}>
              "The team at Occasions Magnified made our anniversary unforgettable.
              The magazine was the perfect way to tell our story. Highly recommended!"
            </p>
            <p style={styles.clientName}>- Amit & Jyoti</p>
          </div>
          <div style={styles.designerImagePlaceholder}></div>
        </div>
      </section>

      {/* --- FAQ SECTION (NEW) --- */}
      <section style={styles.faqSection}>
        <h2 style={styles.sectionTitle}>FAQ's - Everything You Need to Know</h2>
        <div style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div
                style={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div style={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    overflowX: "hidden",
    backgroundImage: `url(${BG02})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
  },
  // --- HERO STYLES ---
  heroSection: { position: "relative", width: "100%", height: "100vh", display: "flex" },
  logo: { position: "absolute", top: "5vh", left: "10%", transform: "translateX(-50%)", width: "15vw" },
  leftSection: { position: "absolute", top: "55%", left: "5%", transform: "translateY(-50%)", fontFamily: "Open Sans", maxWidth: "40vw" },
  strongText: { color: "#450201", fontFamily: "Anton, Open Sans", fontSize: "5.5em", fontWeight: "200", marginTop: "10em", lineHeight: "1.1" },
  pText: { fontFamily: "Open Sans", fontSize: "1.5em", fontStyle: "italic", marginTop: "2vh", lineHeight: "1.4", color: "#2C1810" },
  rightSection: { position: "absolute", top: "40%", right: "5%", transform: "translateY(-50%)", width: "40vw" },
  rightImage: { height: "70vh", width: "auto", marginTop: "10%" },
  buttonContainer: { position: "absolute", bottom: "10vh", left: "5%", display: "flex", gap: "1vw" },
  shopButton: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1vw", backgroundColor: "#ffffff", color: "#4d0101", border: "solid 3px #4d0101", padding: "1vh 1.5vw", fontSize: "1rem", fontFamily: "Poppins", fontWeight: "700", borderRadius: "50px", cursor: "pointer", transition: "all 0.3s ease" },
  buttonText: { fontSize: "1rem", fontFamily: "Poppins", fontWeight: "700" },
  arrowIcon: { fontSize: "1.2rem", color: "#ffffff", width: "2rem", height: "2rem", backgroundColor: "#4d0101", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },

  // --- STRIP & VIDEO ---
  strip: { backgroundImage: `url(${redBackground})`, backgroundSize: "cover", color: "#e5dcc8", padding: "4vh 0", fontSize: "3em", fontFamily: "Anton, open sans", textAlign: "center", width: "100%" },
  videoContainer: { width: "100%", height: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.05)" },
  videoPlaceholder: { width: "80%", height: "80%", backgroundColor: "#450201", borderRadius: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center' },

  // --- SAMPLES ---
  samplesSection: { textAlign: "center", paddingBottom: "5vh" },
  sectionTitle: { fontSize: "3rem", fontWeight: "400", fontFamily: "Anton, open sans", color: "#4d0101", margin: "5vh 0" },
  carouselWrapper: { backgroundImage: `url(${redBackground})`, backgroundSize: "cover", padding: "5vh 0", display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" },
  samplesGallery: { display: "flex", overflowX: "auto", gap: "2vw", scrollBehavior: "smooth", width: "80%", padding: "0 2vw" },
  sampleBox: { minWidth: "20vw", height: "40vh", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" },
  arrow: { background: "transparent", border: "none", width: "3rem", height: "3rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
  arrowLeft: { marginRight: "1vw" },
  arrowRight: { marginLeft: "1vw" },
  arrowShapeLeft: { width: "15px", height: "15px", borderLeft: "4px solid white", borderBottom: "4px solid white", transform: "rotate(45deg)" },
  arrowShapeRight: { width: "15px", height: "15px", borderLeft: "4px solid white", borderBottom: "4px solid white", transform: "rotate(-135deg)" },
  redLine: { border: "none", height: "4px", width: "90%", margin: "0 auto", backgroundColor: "#4d0101", borderRadius: "2px" },

  // --- HOW IT WORKS ---
  works: { textAlign: "center", padding: "5vh 0" },
  howItWorksImage: { maxWidth: "80%", height: "auto", margin: "0 auto", display: "block" }, // Renamed from howItWorks to avoid conflict

  // --- TESTIMONIALS ---
  testimonialSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5vh"
  },
  testimonialHeader: {
    width: "100%",
    height: "20vh",
    backgroundImage: `url(${redBackground})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5vw",
    color: "#e5dcc8",
    fontSize: "3em",
    fontFamily: "Anton, sans-serif",
    letterSpacing: "0.1em",
  },
  testimonialContent: {
    width: "100%",
    backgroundImage: `url(${BG01})`, // Using the marble texture
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  quoteBox: {
    maxWidth: "600px",
    textAlign: "center",
    padding: "2rem",
    border: "2px dashed #450201",
    borderRadius: "15px",
    backgroundColor: "rgba(255,255,255,0.8)",
    marginRight: "50px", // Make space for the image
  },
  quoteText: {
    fontFamily: "Poppins, sans-serif",
    fontStyle: "italic",
    fontSize: "1.2rem",
    color: "#450201",
    marginBottom: "1rem",
  },
  clientName: {
    fontWeight: "bold",
    color: "#450201",
    fontSize: "1.1rem",
  },
  designerImagePlaceholder: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    border: "5px solid #fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },

  // --- FAQ ---
  faqSection: {
    padding: "5vh 10vw",
    backgroundColor: "#F9F7F2", // Light off-white
    textAlign: "center",
  },
  faqContainer: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "left",
  },
  faqItem: {
    borderBottom: "1px solid #450201",
    marginBottom: "1rem",
  },
  faqQuestion: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#450201",
    padding: "1rem 0",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  faqAnswer: {
    paddingBottom: "1rem",
    color: "#2C1810",
    lineHeight: "1.5",
    fontFamily: "Open Sans, sans-serif",
  }
};

export default Omag_main;