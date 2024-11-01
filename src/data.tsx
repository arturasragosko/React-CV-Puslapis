import Rwth from "./assets/RWTH.svg";
import Vgtu from "./assets/VGTU.svg";
import RwthSz from "./assets/RWTH_SZ.svg";
import Ivu from "./assets/IVU.svg";
import Comp from "./assets/COMPS.svg";
import Knime from "./assets/KNIME.svg";

export const routes = [
  { path: "/", label: "HOME" },
  { path: "/cv", label: "CV" },
  { path: "/contacts", label: "CONTACTS" },
];

export const educationData = [
  {
    photoUrl: Rwth,
    text1: "RWTH-Aachen",
    text2: "Rheinisch-Westfälische Technische Hochschule Aachen",
    text3: "Bachelor, Computer Science",
    additionalText: "2020 - Present",
  },
  {
    photoUrl: Vgtu,
    text1: "VilniusTECH",
    text2: "Vilnius Gediminas Technical University",
    text3: "Bachelor, Information Systems",
    additionalText: "2019 - Present",
  },
  {
    photoUrl: RwthSz,
    text1: "Sprachzentrum der RWTH-Aachen",
    text2: "Rheinisch-Westfälische Technische Hochschule Aachen",
    text3: "C1, German Language",
    additionalText: "2019 - 2020",
  },
];

export const experienceData = [
  {
    photoUrl: Ivu,
    text1: "IVU Traffic Technologies AG",
    text2: "Aachen, Germany",
    text3: "Software Developer",
    additionalText: "2021 - Present",
  },
];

export const certificationData = [
  {
    photoUrl: Comp,
    text1: "CompTIA Security+",
    text2: "95/100",
    text3: "Expires 2026",
    additionalText: "2024",
  },
  {
    photoUrl: Knime,
    text1: "Certified KNIME Data Analyst",
    text2: "100/100",
    text3: "Expires 2026",
    additionalText: "2024",
  },
];

export const cvHeaderLines = [
  "First name Last name: Artūras Ragoško",
  "Birth date: 2000-10-06",
  "Address: Neukölner Str. 11a, 12345 Berlin, Germany",
  "Phone: +49 100 0000000",
  "Email: arra@proton.me",
];

export const featuresData = [
  {
    title: "Clear Requirements",
    description: "Define precise and actionable project requirements.",
    backgroundColor: "#00C7BE",
    icon: "bi-check-circle",
    iconColor: "#FFFFFF",
  },
  {
    title: "Data Insights",
    description: "Transform raw data into valuable business insights.",
    backgroundColor: "#30B0C7",
    icon: "bi-bar-chart-line",
    iconColor: "#FFFFFF",
  },
  {
    title: "Top Security",
    description: "Implement robust security measures for your data.",
    backgroundColor: "#007AFF",
    icon: "bi-shield-lock",
    iconColor: "#FFFFFF",
  },
  {
    title: "Rapid Delivery",
    description: "Deliver projects on time without compromising quality.",
    backgroundColor: "#00C7BE",
    icon: "bi-speedometer2",
    iconColor: "#FFFFFF",
  },
  {
    title: "Collaborative Approach",
    description: "Work closely with clients for better outcomes.",
    backgroundColor: "#30B0C7",
    icon: "bi-people",
    iconColor: "#FFFFFF",
  },
  {
    title: "Innovative Solutions",
    description: "Provide cutting-edge solutions to complex challenges.",
    backgroundColor: "#007AFF",
    icon: "bi-lightbulb",
    iconColor: "#FFFFFF",
  },
];

// Text for CISO card
export const cisoTxt =
  "As a CISO (Chief Information Security Officer) \nI specialize in safeguarding organizations data\nand information systems by implementing\nrobust security strategies. \nWith expertise in risk management,\ncompliance, and cybersecurity, \nI ensure your business stays\nprotected against\never-evolving digital\nthreats.";
export const cisoH = "CISO";

// Text for Data Mining card
export const dmTxt =
  "Unlock hidden patterns and insights from vast\ndatasets with advanced data mining techniques.\nI help businesses make data-driven decisions\nby extracting meaningful trends,\npredicting future outcomes,\nand turning raw data into\nvaluable intelligence for\ncompetitive advantage.";
export const dmH = "Data Mining";

// Text for Requirements Engineering card
export const rqTxt =
  "I ensure successful project outcomes by defining\nclear, precise, and actionable requirements.\nWith a focus on aligning stakeholder needs\nwith technical capabilities, I streamline\nthe development process, reducing\nerrors and delivering solutions\nthat meet business objectives.";
export const rqH = "Requirements\nEngineering";
