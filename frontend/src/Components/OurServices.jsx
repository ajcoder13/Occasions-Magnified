import React from 'react';

function OurServices() {
  const styles = {
    container: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      width: '100%',
      backgroundColor: '#240405',
      border: '2px solid #fff',
      borderLeft: 'none',
      borderRight: 'none',
      padding: '1em 0',
    },
    scrollWrapper: {
      display: 'inline-flex',
      animation: 'scroll-left 20s linear infinite',
    },
    scrollText: {
      color: '#fff',
      fontSize: '1.5em',
      letterSpacing: '0.1em',
      wordSpacing: '0.2em',
      fontFamily: 'Poppins, sans-serif',
      marginRight: '1em',
    },
    keyframes: `
      @keyframes scroll-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `,
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.scrollWrapper}>
          <span style={styles.scrollText}>
            SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS |
          </span>
          {/* Duplicate for seamless scroll */}
          <span style={styles.scrollText}>
            SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS |
          </span>
        </div>
      </div>
      <style>{styles.keyframes}</style>
    </div>
  );
}

export default OurServices;
