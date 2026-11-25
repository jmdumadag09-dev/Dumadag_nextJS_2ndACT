export const metadata = {
  title: "Projects | Jian Marc Dumadag",
};

const projects = [
  { id: 1, name: "Project one", description: "This is the first project." },
  { id: 2, name: "Project two", description: "This is the second project." },
  { id: 3, name: "Project three", description: "This is the third project." },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>

      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}