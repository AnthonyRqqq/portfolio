import Project from "../Components/Project";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <div>
      <Project projects={projects} />
    </div>
  );
}
