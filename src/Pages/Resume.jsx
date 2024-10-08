import resumeDownload from "../assets/Anthony-Rosati-Resume.pdf";

export default function Resume() {
  return (
    <div>
      {/* Downloadable resume */}
      {/* <h4 className="d-flex justify-content-center pb-3">
        Download my resume&nbsp;
        <a href={resumeDownload} download>
          here.
        </a>
      </h4> */}

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
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
              <li>React</li>
              <li>Bootstrap</li>
              <li>Prime React</li>
            </ul>
          </div>
        </div>

        <div>
          {/* Back end skills list */}
          <div className="d-flex justify-content-center">
            <h4>Back End Proficiences</h4>
          </div>
          <div className="d-flex justify-content-center">
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize, MSSQL, Knex</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
