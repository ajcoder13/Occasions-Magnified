import React, {  useState } from "react";
// import Header from "./Header";
import { useNavigate } from "react-router-dom";
import redBackground from "../assets/dark-red-brown-background.jpg";
import OMAGlogo from "../assets/O_Mag Logo.png";
import magazineVideo from "../assets/Magazine.mp4";

function OMAG() {
  // const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const handleNavigate = () => {
    navigate("/order");
  };

  return (
    <div style={styles.container}>
        <div style={styles.main}>
      {/* <Header isScrolled={isScrolled} /> */}
      <img src={OMAGlogo} alt="Logo" style={styles.logo} />
      <div style={styles.content}> <p>Turn your magazines into a keepsake with our<br/> custom  magazines, designed
        to celebrate every <br/>special  moment!
      </p></div>
      <div><video src={magazineVideo} style={styles.video} autoPlay loop muted  /></div>
      <hr style={styles.hr}/>
      <button
          style={{
            ...styles.orderNow,
            ...(isHovered ? styles.exploreHover : {}),
          }}
          onClick={handleNavigate}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ORDER NOW!
        </button>
          </div>
      </div>
    
  );
}

const styles = {
  container: {
    position: "relative",
    overflow: "hidden",
    backgroundImage: ` url(${redBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "110vh",
    objectFit: "cover",
    display: "flex",


  },
  main:{
    marginLeft:"4vw",
  },
  logo: {
    position: "absolute",
    top: "12vh",
    // left: "5vw",
    width: "10vw",
    height: "auto",
    zIndex: 100,
  },
  content: {
    position: "relative",
    color: "#fff",
    marginTop: "40vh",
    marginRight: "30vw",
    marginLeft:"-1.5vw",
    padding: "2rem",
    fontSize: "2rem",
    wordSpacing: "0.5em",
    fontFamily: "Poppins, sans-serif",
  },
  video:{
    position: "absolute",
    top: "12vh",
    left: "60vw",
    width: "33vw",
    height: "auto",
    zIndex: 50,
  },
  hr:{
    marginTop: "4em",
    width:"90%",
  },
  orderNow: {
  backgroundColor: "#f6f2ed", // light cream shade
  fontFamily: "Poppins, sans-serif",
  marginTop: "0.5em",
  fontSize: "2em",
  fontWeight: "600",
  fontStyle: "italic",
  color: "#450201", // dark brown shade
  padding: "0.3em 1em",
  border: "none",
  borderTopRightRadius: "2em", // rounded on top-right
  borderBottomRightRadius: "2em", // rounded on bottom-right
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
  cursor: "pointer",
  letterSpacing: "0.03em",
},

}


export default OMAG;
