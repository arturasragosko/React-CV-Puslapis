import React from "react";

// Define the ContactSection component
const ContactSection: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Left side for contact information */}
      <div style={styles.infoContainer}>
        <h1 style={styles.heading}>Let's Connect!</h1>
        <p style={styles.text}>
          <strong>Location:</strong>
          <br></br>Neukölner Str. 11a, 12345 Berlin
        </p>
        <p style={styles.text}>
          <strong>Office Hours:</strong>
          <br></br> Monday – Friday: 10:00 AM – 1:00 PM (CET)
        </p>
        <div style={styles.contactRow}>
          <p style={styles.text}>
            <strong>Phone:</strong>
            <br></br> +49 100 0000000
          </p>
          <p style={styles.text}>
            <strong>Email:</strong>
            <br></br> arra@proton.me
          </p>
        </div>
        <br></br>
        <p style={styles.text}>
          Whether you have a project in mind or just need more information, feel
          free to reach out. I'm here to help!
        </p>
      </div>

      {/* Right side for the map */}
      <div style={styles.mapContainer}>
        {/* Embed a map */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.204000696793!2d13.388859315493903!3d52.517036079812844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e0a301b7a9%3A0x4f4b9c1f945b9dbf!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1633954487640!5m2!1sen!2sde"
          style={styles.map}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    display: "flex",
    backgroundColor: "white",
    padding: "5px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoContainer: {
    width: "60%",
    paddingRight: "20px",
    fontFamily: "'Courier Prime', monospace",
    fontWeight: 400,
    fontStyle: "normal",
  },
  heading: {
    fontSize: "40px",
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "60px",
  },
  text: {
    fontSize: "20px",
    marginBottom: "10px",
    marginLeft: "60px",
  },
  contactRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: "20px",
  },
  mapContainer: {
    width: "40%",
  },
  map: {
    width: "100%",
    height: "600px",
    border: "none",
  },
};

export default ContactSection;
