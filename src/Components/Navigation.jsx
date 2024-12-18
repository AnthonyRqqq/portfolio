import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const currentPage = useLocation().pathname;
  const navigate = useNavigate();
  const pages = ["Portfolio", "Resume"];

  return (
    <div className="row">
      <div>
        <div
          className={
            currentPage === "/" ? "homepage-navbar" : "standard-navbar"
          }
        >
          <h1
            className={currentPage !== "/" ? `home-link mx-3` : "mx-3"}
            style={{ textAlign: 'center'}}
            onClick={() => navigate("/")}
          >
            Anthony Rosati
          </h1>

          <ul className="nav">
            {pages.map((page, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link
                    to={`/${page}`}
                    
                    className={`nav-link link-item ${
                      currentPage === `/${page}` ? "active" : ""
                    }`}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
