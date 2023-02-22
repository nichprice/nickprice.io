"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/projectcard";

export default function PortfolioPage() {
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
    <div className="mx-24">
      <h1 className="text-5xl font-medium flex justify-center text-sky-600">
        Here are some things that I've worked on:
      </h1>
      <div>
        {projects.map((project: { id: React.Key | null | undefined }) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
