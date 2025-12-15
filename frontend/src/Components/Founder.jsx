import React from 'react'
import shri from '../assets/Shri.png'
import redBackground from "../assets/dark-red-brown-background.jpg";
function Founder() {
  return (
    <div style={styles.container}>
        <img src={shri} alt="Shristi" style={styles.image} />
        <div style={styles.content}>
      <h2 style={{ fontWeight: "400" }}>MEET THE FOUNDER</h2><br/>
      <p>
Hi, I'm Shristi Jhalani - the designer and founder of Occasions Magnified. I believe every moment worth celebrating deserves thoughtful, beautiful design. I started this brand to bring soul into stationery and stories into design. Whether it's a Save the Date or a surprise anniversary magazine, I put my heart into every pixel.<br />
Let's co-create something memorable.</p></div>
      
    </div>
  )
}

const styles = {
    container: {
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${redBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "110vh",
        display: "flex",
    },
    image: {
        width: '50vw',
        height: 'auto',
        objectFit: 'contain',
    },
    content: {
        color: '#fff',
        fontSize: '1.7em',
        lineHeight: '1.5em',
        wordSpacing: '0em',
        letterSpacing: '0.05em',
        maxWidth: '38vw',
        marginLeft: '2vw',
        marginTop: '25vh',
        fontFamily: 'poppins, sans-serif',
        textAlign: 'justify',
    },
    // Note: Inline styles do not support selectors like 'content > h2'.
    // To style the h2, use a className or inline style directly on the element.
};

export default Founder
