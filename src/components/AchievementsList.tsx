import Achievement from "./Achievement";
import SvgLine from "../assets/STYLIZED_LINE.svg";

// Achievement object structure
interface AchievementData {
  photoUrl: string;
  text1: string;
  text2: string;
  text3: string;
  additionalText: string;
}

// Achievement section
interface Props {
  title: string;
  data: AchievementData[];
}

const AchievementsList = ({ title, data }: Props) => {
  return (
    <div className="container">
      <img
        src={SvgLine}
        alt="Divider"
        style={{
          display: "block",
          margin: "0 auto",
          width: "250px",
        }}
      />
      <h1>{title}</h1>
      {data.map((achievement, index) => (
        <Achievement key={index} data={achievement} />
      ))}
    </div>
  );
};

export default AchievementsList;
