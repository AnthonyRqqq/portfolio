import resumeDownload from "../assets/Anthony-Rosati-Resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      {/* Downloadable resume */}
      <div
        className="mb-2"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span className="resume-link py-1 px-2">
          <a href={resumeDownload} download="Anthony Rosati Resume.pdf">
            <h4>Download my resume</h4>
          </a>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div className="proficiency-card mx-2 my-2 col-lg-4 col-md-6 col-sm-6">
          {/* Front end skills list */}
          <div className="d-flex justify-content-center">
            <h4>Front End Proficiencies</h4>
          </div>
          <div className="d-flex justify-content-center">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>Playwright End-to-End Testing</li>
              <li>
                <strong>Frameworks</strong>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Prime React</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="proficiency-card mx-2 my-2 col-lg-4 col-md-6 col-sm-6">
          {/* Back end skills list */}
          <div className="d-flex justify-content-center">
            <h4>Back End Proficiences</h4>
          </div>
          <div className="d-flex justify-content-center">
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
              <li>Jest Unit Testing</li>
              <li>
                <strong>SQL</strong>
                <ul>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>MSSQL</li>
                  <li>SSRS</li>
                  <li>Knex</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
