import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathName;
  const pages = ["About", "Contact", "Portfolio", "Resume"];

  return (
    <div className="row">
      <h1 className="col justify-content-start">Anthony Rosati</h1>

      <ul className="nav col justify-content-end">
        {pages.map((page, index) => {
          return (
            <li key={index} className="nav-item">
              <Link
                to={`/${page === "About" ? "" : page}`}
                className={`${
                  currentPage === "/" && "active"
                } nav-link link-item`}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
