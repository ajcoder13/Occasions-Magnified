import React from 'react';
import OurServices from './OurServices';
import serviceVideo from '../assets/Services.mp4'; // adjust your path

function ServicesPage() {
  const styles = {
    videoContainer: {
      width: '100vw',
      height: '83.5vh',
      overflow: 'hidden',
      backgroundColor: '#000',
    },
    video: {
      width: '100%',
      height: '100%',
    //   objectFit: 'cover',
    },
  };

  return (
    <div>
      <OurServices />

      <div style={styles.videoContainer}>
        <video
          style={styles.video}
          src={serviceVideo}
          autoPlay
          loop
          playsInline
          muted
        />
      </div>

      <OurServices />
    </div>
  );
}

export default ServicesPage;
