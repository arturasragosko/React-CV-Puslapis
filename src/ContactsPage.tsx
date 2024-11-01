import SvgLogo from "./assets/STYLIZED_LOGO2.svg";
import ContactSection from "./components/ContactSection";

const ContactsPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#E5E5EA",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "194px",
        paddingBottom: "40px",
        paddingRight: "10%",
        paddingLeft: "10%",
        position: "relative", // Required for absolute positioning of the logo
        overflow: "hidden", // Prevent overflow
      }}
    >
      {/* SVG Logo positioned absolutely with fixed size */}
      <img
        src={SvgLogo}
        alt="Logo"
        style={{
          width: "1350px", // Set a fixed width for the logo
          height: "auto", // Maintain aspect ratio
          zIndex: 1, // Ensure it's above other elements
          position: "absolute", // Keep this for overlapping
          top: "-100px", // Adjust this value as needed
          left: "73%", // Dynamically set the left position
          transform: "translateX(-50%)", // Center the logo horizontally
        }}
      />
      <div
        className="contact-page"
        style={{
          backgroundColor: "white",
          flex: "1",
          padding: "5px 5px",
        }}
      >
        <ContactSection></ContactSection>
      </div>
    </div>
  );
};

export default ContactsPage;
