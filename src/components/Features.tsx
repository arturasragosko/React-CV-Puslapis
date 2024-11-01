import { featuresData } from "../data";

const Features = () => {
  return (
    <div className="container px-4  features-component" id="custom-cards">
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {featuresData.map((feature, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-100 overflow-hidden rounded-4"
              style={{
                backgroundColor: feature.backgroundColor,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-0 mt-5 mb-4 display-6 lh-1 fw-bold">
                  <i
                    className={`bi ${feature.icon} me-2`}
                    style={{ fontSize: "1.75em", color: feature.iconColor }}
                  ></i>
                  {feature.title}
                </h3>
                <p className="lead">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
