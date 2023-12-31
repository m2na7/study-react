import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ 프로젝트 추가</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full px-2 py-1 my-1 text-left rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
