// Function to generate a random number within a range
const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const QuoteCard = () => {
  const numStars = 10;

  // Create an array with random star styles
  const starsArray = Array.from({ length: numStars }).map((_, index) => {
    const top = `${getRandomValue(0, 100)}%`; // random position
    const left = `${getRandomValue(0, 100)}%`; // random position
    const size = `${getRandomValue(5, 15)}px`; // random size
    const delay = `${getRandomValue(0, 5)}s`; // random delay
    const duration = `${getRandomValue(2, 4)}s`; // random duration

    return (
      <div
        key={index}
        className="star"
        style={{
          top: top,
          left: left,
          width: size,
          height: size,
          animationDelay: delay,
          animationDuration: duration,
        }}
      ></div>
    );
  });

  return (
    <div style={{ backgroundColor: "#E5E5EA" }} className="quote-card">
      {/* Inline CSS for the component */}
      <style>
        {`
          .quote-card {
            position: relative;
            overflow: hidden;
          }

          .stars-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
          }

          .star {
            position: absolute;
            background-color: #30B0C7;
            border-radius: 50%;
            opacity: 0;
            animation: twinkle ease-in-out infinite;
          }

          @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}
      </style>

      <div className="stars-container">{starsArray}</div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-10 rounded text-body-emphasis"
            style={{ padding: "4.25rem" }}
          >
            <h1 className="display-4 fst-italic text-center">
              My Commitment to Excellence
            </h1>
            <p className="lead my-3 text-center">
              "Success usually comes to those who are too busy to be looking for
              it."
            </p>
            <p
              className="lead mb-0 text-center"
              style={{ fontStyle: "italic" }}
            >
              — Henry David Thoreau
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
