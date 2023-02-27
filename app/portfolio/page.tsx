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

  return (
    <div className="py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl font-medium flex justify-center text-sky-600 pb-10">
          My Work
        </h1>
        <p className="font-normal leading-relaxed  pb-4">
          I wrote my first line of code in late 2021 and although I'm still
          writing HTML and cooking some of my favorite recipes that were the
          center-piece of my
          <span>
            <a
              href="https://github.com/nichprice/odin-recipes"
              className="text-orange-400 hover:opacity-60"
            >
              {" "}
              first ever project
            </a>
          </span>
          , it's amazing how much I've learned and how far my abilities have
          progressed. I'm still very early in my journey and I know I have a
          long way to go, but I'm so excited to continue to learn and develop my
          knowledge and skills.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        {projects.map((project: { id: React.Key | null | undefined }) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
