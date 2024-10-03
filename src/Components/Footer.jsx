// Import logo images
import githubLogo from "../assets/images/footerImages/github.jpg";
import codewarsLogo from "../assets/images/footerImages/codewars.jpg";
import linkedinLogo from "../assets/images/footerImages/linkedin.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="row footer-logos" style={{ listStyle: "none" }}>
        {/* Render individual logos with appropriate links, opens new tab when clicked */}
        <li className="col-4">
          <span target="_blank" href="https://github.com/AnthonyRqqq">
            <img
              className="img-responsive"
              src={githubLogo}
              alt="github image with link"
            />
          </span>
        </li>
        <li className="col-4">
          <span
            target="_blank"
            href="https://www.linkedin.com/in/anthony-rosati-30b616149/"
          >
            <img
              className="img-responsive"
              src={linkedinLogo}
              alt="linkedin image with link"
            />
          </span>
        </li>
        <li className="col-4">
          <span
            onClick={() => window.open()}
            target="_blank"
            href="https://www.codewars.com/users/AnthonyRqqq"
          >
            <img
              className="img-responsive"
              src={codewarsLogo}
              alt="codewars image with link"
            />
          </span>
        </li>
      </ul>
    </div>
  );
}
