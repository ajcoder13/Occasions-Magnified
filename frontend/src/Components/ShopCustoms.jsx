import React from 'react';
import Header from './Header'; // Reusing your existing Header
import { theme } from '../theme'; // Import the theme we just created

const ShopCustoms = () => {
    return (
        <div style={styles.container}>
            <Header />

            <main style={styles.mainContent}>

                {/* --- Shop Custom Designs Buttons Section --- */}
                <section style={styles.heroSection}>
                    <h1 style={styles.sectionTitle}>SHOP CUSTOM DESIGNS</h1>
                    <div style={styles.buttonGrid}>
                        <CustomButton label="WEDDING INVITATIONS SUITE" />
                        <CustomButton label="WEDDING STATIONERY" />
                        <CustomButton label="O'MAG (MAGAZINE)" />
                        <CustomButton label="CELEBRATION SUITE" />
                    </div>
                </section>

                {/* --- What We Create / Video Placeholder --- */}
                <section style={styles.videoSection}>
                    <div style={styles.videoPlaceholder}>
                        <h2 style={styles.placeholderText}>"What We Create" Video Placeholder</h2>
                    </div>
                </section>

                {/* --- Trending Designs Carousel --- */}
                <section style={styles.carouselSection}>
                    <h2 style={styles.subHeader}>Trending Designs Carousel (Instagram Embed)</h2>
                    <div style={styles.carouselContainer}>
                        {/* Placeholders for Carousel Items */}
                        <div style={styles.carouselItem}></div>
                        <div style={styles.carouselItem}></div>
                        <div style={styles.carouselItem}></div>
                    </div>
                    <button style={styles.secondaryButton}>
                        MORE SAMPLES (REDIRECTED TO OUR WORK PAGE)
                    </button>
                </section>

                {/* --- Reviews & Testimonials --- */}
                <section style={styles.testimonialSection}>
                    <h2 style={styles.subHeader}>Reviews & Testimonials</h2>
                    <div style={styles.testimonialWrapper}>
                        <div style={styles.speechBubble}>
                            <p style={styles.testimonialText}>
                                "Occasions Magnified truly captured our love story in the O'Mag!
                                It was the highlight of our anniversary."
                            </p>
                            <p style={styles.clientName}>- Amit & Jyoti</p>
                        </div>
                        {/* Placeholder for the circular image mentioned */}
                        <div style={styles.clientImagePlaceholder}></div>
                    </div>
                </section>

                {/* --- Guidance Section --- */}
                <section style={styles.guidanceSection}>
                    <h2 style={styles.subHeader}>Not Sure Where to Begin?</h2>
                    <p style={styles.paragraph}>
                        We know every event is unique. Let us guide you to the perfect design.
                    </p>
                </section>

                {/* --- Call to Action --- */}
                <section style={styles.ctaSection}>
                    <button style={styles.primaryButton}>SEE WHAT'S IN STORE</button>
                    <button style={styles.primaryButton}>GET CUSTOM DESIGN</button>
                </section>

                {/* --- FAQ Link --- */}
                <div style={styles.faqContainer}>
                    <a href="/faq" style={styles.link}>FAQ</a>
                </div>

            </main>
        </div>
    );
};

// --- Sub-components for cleaner code ---

const CustomButton = ({ label }) => (
    <button style={styles.categoryButton}>
        {label}
    </button>
);

// --- Styles Object ---
const styles = {
    container: {
        backgroundColor: theme.colors.background,
        minHeight: '100vh',
        fontFamily: theme.fonts.main,
        color: theme.colors.text,
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
    },
    heroSection: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    sectionTitle: {
        fontSize: '2rem',
        color: theme.colors.primary,
        marginBottom: '1.5rem',
        letterSpacing: '1px',
    },
    buttonGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        justifyContent: 'center',
    },
    categoryButton: {
        backgroundColor: 'transparent',
        border: `2px solid ${theme.colors.primary}`,
        color: theme.colors.primary,
        padding: '1rem',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        borderRadius: '0px', // Sharp corners as per modern sophisticated design
        transition: 'all 0.3s ease',
    },
    videoSection: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3rem',
    },
    videoPlaceholder: {
        width: '100%',
        maxWidth: '800px',
        height: '400px',
        backgroundColor: theme.colors.primary,
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.secondary,
    },
    carouselSection: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    subHeader: {
        fontSize: '1.5rem',
        color: theme.colors.primary,
        marginBottom: '1rem',
    },
    carouselContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        overflowX: 'auto',
    },
    carouselItem: {
        width: '200px',
        height: '250px',
        backgroundColor: theme.colors.primary, // Placeholder color
        opacity: 0.8,
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderBottom: `1px solid ${theme.colors.primary}`,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        color: theme.colors.primary,
        cursor: 'pointer',
        fontSize: '0.9rem',
        paddingBottom: '5px',
    },
    testimonialSection: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    testimonialWrapper: {
        position: 'relative',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
    },
    speechBubble: {
        border: `2px dashed ${theme.colors.softBorder}`,
        padding: '2rem',
        borderRadius: '20px',
        backgroundColor: theme.colors.white,
        marginBottom: '1rem',
    },
    testimonialText: {
        fontStyle: 'italic',
        marginBottom: '1rem',
    },
    clientName: {
        fontWeight: 'bold',
    },
    clientImagePlaceholder: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        margin: '0 auto',
        marginTop: '-30px', // Pull it up slightly to overlap or sit near the bubble
        position: 'relative',
        zIndex: 1,
        border: `4px solid ${theme.colors.background}`,
    },
    guidanceSection: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    paragraph: {
        color: theme.colors.text,
        fontSize: '1.1rem',
    },
    ctaSection: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
    },
    primaryButton: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    faqContainer: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    link: {
        color: theme.colors.text,
        textDecoration: 'underline',
        fontWeight: 'bold',
    }
};

export default ShopCustoms;