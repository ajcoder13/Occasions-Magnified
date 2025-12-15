import React from 'react';
import whiteBackground from '../assets/BG-01.png';
function Testimonial() {
    const styles={
        container: {
            backgroundImage: `url(${whiteBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            padding: '2em',
            borderRadius: '8px',
        },
    }
  return (
    <div style={styles.container}>
      </div>
  )
}

export default Testimonial
