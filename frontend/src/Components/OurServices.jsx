import React from 'react';
import { Link } from "react-router-dom";

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
          {/* Original Scroll Item converted to Link */}
          <Link to="/shopcustoms" style={{ textDecoration: 'none' }}>
            <span style={styles.scrollText}>
              SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS |
            </span>
          </Link>

          {/* Duplicate for seamless scroll converted to Link */}
          <Link to="/shopcustoms" style={{ textDecoration: 'none' }}>
            <span style={styles.scrollText}>
              SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS | SHOP CUSTOM DESIGNS |
            </span>
          </Link>
        </div>
      </div>
      <style>{styles.keyframes}</style>
    </div>
  );
}

export default OurServices;
