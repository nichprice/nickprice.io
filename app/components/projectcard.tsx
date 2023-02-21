export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-slate-50 w-80 py-2 my-1 flex justify-center">
      <div>
        <p>{project.title}</p>
      </div>
      <div></div>
    </div>
  );
}
