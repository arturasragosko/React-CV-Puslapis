import { useState } from "react";

interface Props {
  data: {
    photoUrl: string;
    text1: string;
    text2: string;
    text3: string;
    additionalText: string;
  };
}

const Achievement = ({ data }: Props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.container,
        border: hover ? "2px solid gray" : "2px solid transparent",
        filter: hover ? "grayscale(100%)" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={data.photoUrl} alt="Achievement" style={styles.photo} />
      <div style={styles.separator}></div>
      <div style={styles.textContainer}>
        <div style={styles.textRow}>{data.text1}</div>
        <div style={styles.textRow}>{data.text2}</div>
        <div style={styles.textRow}>{data.text3}</div>
      </div>
      <div style={styles.additionalText}>{data.additionalText}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderRadius: "8px",
    marginBottom: "10px",
    transition: "all 0.3s ease-in-out",
  },
  photo: {
    width: "150px",
    height: "50px",
    marginRight: "10px",
  },
  separator: {
    width: "2px",
    height: "50px",
    backgroundColor: "#ccc",
    marginRight: "10px",
  },
  textContainer: {
    flexGrow: 1,
  },
  textRow: {
    fontSize: "20px",
    marginBottom: "4px",
  },
  additionalText: {
    fontSize: "20px",
    color: "black",
  },
};

export default Achievement;
