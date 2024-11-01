import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-4 footer-style">
        <div className="col mb-3">
          <h5 className="footer-heading">Socials</h5>
          <div
            className="d-flex align-items-center mb-3"
            style={{ paddingTop: "30px" }}
          >
            {/* GitHub Icon */}
            <a
              href="https://github.com"
              className="link-body-emphasis text-decoration-none me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bi bi-github"
                style={{ fontSize: "40px", color: "white" }}
              ></i>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              className="link-body-emphasis text-decoration-none me-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bi bi-linkedin"
                style={{ fontSize: "40px", color: "white" }}
              ></i>
            </a>
            {/* Email Icon */}
            <a
              href="mailto:arra@proton.me"
              className="link-body-emphasis text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="bi bi-envelope-at"
                style={{ fontSize: "40px", color: "white" }}
              ></i>
            </a>
          </div>
          <p className="" style={{ color: "white" }}>
            Copyright © 2024 arra_
          </p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3 hide-section">
          <h5 className="footer-heading">Services</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                CISO
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                Security Trainings
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                Business Intelligence
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                Data Mining
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3 hide-section">
          <div style={{ height: "2em" }}></div>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                Requirements Engineering
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                Security Audit & Consulting
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                Relations Management
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contacts"
                className="nav-link footer-links p-0 text-body-secondary"
              >
                IT Infrastructure
              </Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="footer-heading">Contacts</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/contacts" className="footer-contact">
                Mo-Fr 10:00-13:00
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/contacts" className="footer-contact">
                Berlin, 12345, Neukölner Str. 11a.
              </Link>
            </li>
            <li className="nav-item mb-2 footer-contact">
              <Link to="/contacts" className="footer-contact">
                +49 100 0000000
              </Link>
            </li>
            <li className="nav-item mb-2 footer-contact">
              <Link to="/contacts" className="footer-contact">
                arra@proton.me
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
