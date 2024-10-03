import "./Project.css";

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
          <div className="d-flex justify-content-center align-items-center project-links-div mt-1">
           <h4>{project.name}</h4>
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
              onClick={() => {
                window.open(project.githubURL, "_blank");
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
