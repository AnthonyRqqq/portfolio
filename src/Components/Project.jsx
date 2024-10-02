import './Project.css'

export default function Project({ projects }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          {/* Creates link to deployed project */}
          <div className="d-flex justify-content-center align-items-center project-links-div">
            <a
              className="deployed-link d-flex"
              target="_blank"
              href={project.deployedURL}
              rel="noopener noreferrer"
            >
              {project.name}
            </a>

            {/* Creates link to github repo of project */}
            <a
              className="project-github-link d-flex"
              target="_blank"
              href={project.githubURL}
              rel="noopener noreferrer"
            >
              {/* <img
                className="img-responsive project-github-link-image"
                src={githubLogo}
                alt="link to github repository"
              /> */}
            </a>
          </div>

          <div className="d-flex justify-content-center">
            <img
              src={project.screenshot}
              alt={project.imageText}
              style={{ width: "240px", height: "200px" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
