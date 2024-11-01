import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cisoH, cisoTxt, dmH, dmTxt, rqH, rqTxt } from "../data";

const SvgAnimation = () => {
  // Track screensize
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 994);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 994);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Change coordinates and text based on specific event
  const [hTxtFirst, setHTxtFirst] = useState({ h: cisoH, p: cisoTxt });
  const [posFirst, setPosFirst] = useState({ x: 0, y: 0 });
  const [hPosFirst, setHPosFirst] = useState({ x: 120, y: 30 });

  const [hTxtSecond, setHTxtSecond] = useState({ h: "2", p: "" });
  const [posSecond, setPosSecond] = useState({ x: 100, y: 0 });
  const [hPosSecond, setHPosSecond] = useState({ x: 230, y: 30 });

  const [hTxtThird, setHTxtThird] = useState({ h: "3", p: "" });
  const [posThird, setPosThird] = useState({ x: 150, y: 0 });
  const [hPosThird, setHPosThird] = useState({ x: 285, y: 30 });

  //  Logic to control cards on event

  // Opening First card causes Second and Third to get closed.
  const openFirst = () => {
    setPosFirst({ x: 0, y: 0 });
    setHPosFirst({ x: 120, y: 30 });
    setHTxtFirst({ h: cisoH, p: cisoTxt });

    setPosSecond({ x: 100, y: 0 });
    setHPosSecond({ x: 230, y: 30 });
    setHTxtSecond({ h: "2", p: "" });

    setPosThird({ x: 150, y: 0 });
    setHPosThird({ x: 285, y: 30 });
    setHTxtThird({ h: "3", p: "" });
  };
  // Opening Second card causes First and Third to get closed.
  const openSecond = () => {
    setPosFirst({ x: 0, y: 0 });
    setHPosFirst({ x: 95, y: 30 });
    setHTxtFirst({ h: "1", p: "" });

    setPosSecond({ x: 50, y: 0 });
    setHPosSecond({ x: 170, y: 30 });
    setHTxtSecond({ h: dmH, p: dmTxt });

    setPosThird({ x: 150, y: 0 });
    setHPosThird({ x: 285, y: 30 });
    setHTxtThird({ h: "3", p: "" });
  };
  // Opening Third card causes First and Second to get closed.
  const openThird = () => {
    setPosFirst({ x: 0, y: 0 });
    setHPosFirst({ x: 95, y: 30 });
    setHTxtFirst({ h: "1", p: "" });

    setPosSecond({ x: 50, y: 0 });
    setHPosSecond({ x: 180, y: 30 });
    setHTxtSecond({ h: "2", p: "" });

    setPosThird({ x: 100, y: 0 });
    setHPosThird({ x: 220, y: 30 });
    setHTxtThird({ h: rqH, p: rqTxt });
  };
  // Needed to add break line from input string.
  const renderMultilineText = (text: string, xPosition: number, gap = "6") => {
    return text.split("\n").map((line, index) => (
      <tspan x={xPosition} dy={index === 0 ? "0" : gap} key={index}>
        {line}
      </tspan>
    ));
  };

  // Conditionally render based on screen width
  if (!isLargeScreen) return null;

  return (
    <>
      <div
        className="container-fluid p-0 m-0"
        style={{ backgroundColor: "#E5E5EA" }}
      >
        <div className="row">
          <div className="col-12">
            <svg width="100%" height="" viewBox="0 0 300 100">
              <g transform={`scale(${1})`}>
                <motion.polygon
                  id="first"
                  points="100,0 50,50 0,100 100,100 200,0"
                  style={{ fill: "#00C7BE" }}
                  initial={{ x: posFirst.x, y: posFirst.y }}
                  animate={{ x: posFirst.x, y: posFirst.y }}
                  transition={{ duration: 0.5 }}
                  onClick={openFirst}
                />
                <motion.text
                  className="h-svg"
                  id="h-first"
                  x={`${hTxtFirst.h === "1" ? hPosFirst.x : hPosFirst.x - 20}`}
                  y={`${hPosFirst.y}`}
                  fill="white"
                  fontSize="15"
                  onClick={openFirst}
                >
                  {hTxtFirst.h}
                </motion.text>
                <motion.text
                  className="p-svg"
                  id="p-first"
                  x={`${hPosFirst.x - 60}`}
                  y={`${hPosFirst.y + 9}`}
                  fill="white"
                  fontSize="3.7"
                  onClick={openFirst}
                >
                  {renderMultilineText(hTxtFirst.p, hPosFirst.x - 51)}
                </motion.text>
                <motion.polygon
                  id="second"
                  points="100,0 50,50 0,100 100,100 200,0"
                  style={{ fill: "#30B0C7" }}
                  initial={{ x: posSecond.x, y: posSecond.y }}
                  animate={{ x: posSecond.x, y: posSecond.y }}
                  transition={{ duration: 0.5 }}
                  onClick={openSecond}
                />
                <motion.text
                  className="h-svg"
                  id="h-second"
                  x={`${hPosSecond.x}`}
                  y={`${hPosSecond.y}`}
                  fill="white"
                  fontSize="14"
                  onClick={openSecond}
                >
                  {renderMultilineText(hTxtSecond.h, hPosSecond.x - 35, "13")}
                </motion.text>
                <motion.text
                  className="p-svg"
                  id="p-second"
                  x={`${hPosSecond.x - 60}`}
                  y={`${hPosSecond.y + 9}`}
                  fill="white"
                  fontSize="3.7"
                  onClick={openSecond}
                >
                  {renderMultilineText(hTxtSecond.p, hPosSecond.x - 51)}
                </motion.text>
                <motion.polygon
                  id="third"
                  points="100,0 50,50 0,100 100,100 200,0"
                  style={{ fill: "#007AFF" }}
                  initial={{ x: posThird.x, y: posThird.y }}
                  animate={{ x: posThird.x, y: posThird.y }}
                  transition={{ duration: 0.5 }}
                  onClick={openThird}
                />
                <motion.text
                  className="h-svg"
                  id="h-third"
                  x={`${hPosThird.x}`}
                  y={`${hPosThird.y}`}
                  fill="white"
                  fontSize="13.5"
                  onClick={openThird}
                >
                  {renderMultilineText(hTxtThird.h, hPosThird.x - 40, "10")}
                </motion.text>
                <motion.text
                  className="p-svg"
                  id="p-third"
                  x={`${hPosThird.x - 60}`}
                  y={`${hPosThird.y + 18}`}
                  fill="white"
                  fontSize="3.7"
                  onClick={openThird}
                >
                  {renderMultilineText(hTxtThird.p, hPosThird.x - 61)}
                </motion.text>
                <polygon
                  id="forth"
                  points="100,0 50,50 0,100 100,100 200,0"
                  style={{ fill: "#0056B3" }}
                  transform="translate(200, 0)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SvgAnimation;
