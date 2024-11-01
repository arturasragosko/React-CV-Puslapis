import AchievementsList from "./components/AchievementsList";
import SvgLogo from "./assets/STYLIZED_LOGO2.svg";
import CVHeader from "./components/CvHeader";
import {
  cvHeaderLines,
  educationData,
  experienceData,
  certificationData,
} from "./data";

const CvPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#E5E5EA",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "194px",
        paddingBottom: "40px",
        paddingRight: "20%",
        paddingLeft: "20%",
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
          position: "absolute", // Overlapping
          top: "-100px",
          left: "73%",
          transform: "translateX(-50%)", // Center the logo horizontally
        }}
      />
      <div
        className="cv-page"
        style={{
          backgroundColor: "white",
          flex: "1",
          padding: "60px 100px",
        }}
      >
        <h1>CV</h1>
        <CVHeader lines={cvHeaderLines}></CVHeader>
        <AchievementsList title={"Education"} data={educationData} />
        <AchievementsList title={"Experience"} data={experienceData} />
        <AchievementsList title={"Certifications"} data={certificationData} />
      </div>
    </div>
  );
};

export default CvPage;
