import React, { useEffect, useState } from "react";
import ProjectCard from "./projectcard";

export default function ProjectsHolder() {
  const [projects, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/projects")
      .then((res) => res.json())
      .then((projects) => {
        setData(projects);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!projects) return <p>No profile data</p>;

  return (
    <div>
      {projects.map((project: { id: React.Key | null | undefined }) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
