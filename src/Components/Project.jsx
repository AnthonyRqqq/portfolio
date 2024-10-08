import "./Project.css";
import githubLogo from "../assets/images/footerImages/github.jpg";

export default function Project({ projects }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {projects.map((project) => (
        <div key={project.id} className="project-card col-3 px-2 mx-3 my-4">
          {/* Creates link to deployed project */}
          <div className="d-flex justify-content-center align-content-center project-links-div mt-1">
            <h4
              className="project-title"
              onClick={() => window.open(project.deployedURL, "_blank")}
            >
              {project.name}
            </h4>
            <div>
              <img
                style={{ width: "2rem", marginLeft: "0.5rem" }}
                className="github-logo"
                onClick={() => window.open(project.githubURL, "_blank")}
                src={githubLogo}
              ></img>
            </div>
          </div>

          <div className="d-flex justify-content-center mb-2">
            <img
              src={project.screenshot}
              alt={project.imageText}
              style={{
                width: "inherit",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
              // onClick={() => {
              //   window.open(project.githubURL, "_blank");
              // }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
