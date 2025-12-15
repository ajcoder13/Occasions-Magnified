import React, { useState } from 'react';
import Header from './Header';
import BG02 from "../assets/BG-02.png";
import redBackground from "../assets/dark-red-brown-background.jpg";

const ShopMagazines = () => {
    const products = [
        { id: 1, img: require("../assets/20.png"), title: "Classic Love Story" },
        { id: 2, img: require("../assets/21.png"), title: "Modern Minimalist" },
        { id: 3, img: require("../assets/22.png"), title: "Vintage Romance" },
        { id: 4, img: require("../assets/23.png"), title: "Editorial Chic" },
        { id: 5, img: require("../assets/24.png"), title: "Bold & Beautiful" },
        { id: 6, img: require("../assets/25.png"), title: "Timeless Elegant" },
        { id: 7, img: require("../assets/26.png"), title: "Floral Fantasy" },
        { id: 8, img: require("../assets/27.png"), title: "Golden Hour" },
        { id: 9, img: require("../assets/28.png"), title: "Midnight Dream" },
    ];

    return (
        <div style={styles.container}>
            <Header />

            {/* --- Page Header --- */}
            <div style={styles.pageHeader}>
                <h1 style={styles.title}>THE MAGAZINE COLLECTION</h1>
                <p style={styles.subtitle}>Choose a style to begin your story</p>
            </div>

            {/* --- Product Grid --- */}
            <div style={styles.gridContainer}>
                {products.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <div style={styles.imageWrapper}>
                            <img src={product.img} alt={product.title} style={styles.bookImage} />
                        </div>
                        <div style={styles.cardContent}>
                            <h3 style={styles.productTitle}>{product.title}</h3>
                            <p style={styles.price}>Start Customizing &rarr;</p>
                            <button style={styles.button}>SELECT DESIGN</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        backgroundImage: `url(${BG02})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Keeps bg static while scrolling
        paddingBottom: "5rem",
    },
    pageHeader: {
        paddingTop: "15vh",
        textAlign: "center",
        marginBottom: "4rem",
    },
    title: {
        fontFamily: "Anton, sans-serif",
        fontSize: "4rem",
        color: "#450201",
        letterSpacing: "2px",
        marginBottom: "0.5rem",
    },
    subtitle: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "1.2rem",
        fontStyle: "italic",
        color: "#2C1810",
    },
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "4rem",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 2rem",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // No background on card to keep the clean floating book look
    },
    imageWrapper: {
        perspective: "1000px", // Essential for 3D effect
        marginBottom: "1.5rem",
        cursor: "pointer",
    },
    bookImage: {
        width: "280px",
        height: "380px",
        objectFit: "cover",
        borderRadius: "2px 5px 5px 2px",
    },
    cardContent: {
        textAlign: "center",
    },
    productTitle: {
        fontFamily: "Anton, sans-serif",
        fontSize: "1.5rem",
        color: "#450201",
        margin: "0.5rem 0",
        letterSpacing: "1px",
    },
    price: {
        fontFamily: "Poppins, sans-serif",
        fontSize: "0.9rem",
        color: "#2C1810",
        marginBottom: "1rem",
        cursor: "pointer",
        textDecoration: "underline",
    },
    button: {
        backgroundColor: "#450201",
        color: "#fff",
        border: "none",
        padding: "0.8rem 2rem",
        fontFamily: "Poppins, sans-serif",
        fontSize: "0.9rem",
        fontWeight: "600",
        borderRadius: "0", // Sharp corners
        cursor: "pointer",
        transition: "background 0.3s ease",
    }
};

export default ShopMagazines;