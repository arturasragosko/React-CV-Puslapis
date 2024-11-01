import { Link } from "react-router-dom";

interface Route {
  path: string;
  label: string;
}

interface Props {
  routes: Route[];
}

const Header = ({ routes }: Props) => {
  return (
    <header className="border-bottom custom-header">
      <div className="d-flex flex-wrap justify-content-center">
        <a
          href="/"
          className="text-logo d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="text-logo-highlight" style={{ fontSize: "20px" }}>
            ARRA_
          </span>
        </a>

        <ul className="nav nav-pills">
          {/* Dynamically render navigation links based on the routes prop */}
          {routes.map((route, index) => (
            <li className="nav-item me-3" key={index}>
              <Link to={route.path} className="nav-link">
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
