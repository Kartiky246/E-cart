import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to [Your Store Name], your go-to destination for all your online shopping needs!
        Founded in [Year], we have been committed to delivering an exceptional shopping experience
        to our customers.
      </p>
      <p style={styles.paragraph}>
        Our mission is to offer a curated selection of high-quality products that cater to diverse
        tastes and preferences. Whether you're in search of the latest fashion trends, cutting-edge
        electronics, or everyday essentials, we've got you covered.
      </p>
      <p style={styles.paragraph}>
        What sets us apart is our dedication to customer satisfaction. We believe in going the extra
        mile to ensure that every purchase you make leaves you delighted. Our team of experts works
        tirelessly to bring you the best deals and the latest products.
      </p>
      <h3 style={styles.subHeading}>Our Values</h3>
      <ul style={styles.list}>
        <li>Customer Satisfaction</li>
        <li>Quality  Assurance</li>
        <li>Transparency</li>
        <li>Innovation</li>
      </ul>
      <p style={styles.paragraph}>
        We value the trust our customers place in us and strive to build lasting relationships. If you
        have any questions, feedback, or concerns, our customer support team is ready to assist you.
        Your happiness is our priority!
      </p>
      <p style={styles.paragraph}>
        Thank you for choosing [Your Store Name]. Happy shopping!
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '15px',
  },
  list: {
    listStyleType: 'circle',
    paddingLeft: '20px',
    marginBottom: '15px',
  },
};

export default AboutPage;
