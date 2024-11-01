import ThomasA from "../assets/THOMAS_ANDERSON.jpg";

interface Props {
  lines: string[];
}

const CVHeader = ({ lines }: Props) => {
  return (
    <div style={styles.container}>
      <img
        src={ThomasA}
        alt="PersonImage"
        style={styles.image as React.CSSProperties}
      />
      <div style={styles.textContainer as React.CSSProperties}>
        {lines.map((line, index) => (
          <p key={index} style={styles.text}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1%",
    paddingTop: "3%",
    padding: "1%",
  },
  image: {
    width: "227px",
    height: "278px",
    objectFit: "cover",
    marginRight: "5%",
    marginLeft: "15%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    margin: "4px 0",
    fontSize: "20px",
  },
};

export default CVHeader;
