"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "../components/projectcard";

export default function PortfolioPage() {
  const [projects, setData] = useState<any[]>([]);
  const [techs, setTechs] = useState<any[]>([]);
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

  useEffect(() => {
    fetch("/api/techs")
      .then((res) => res.json())
      .then((techs) => {
        setTechs(techs);
      });
  }, []);

  return (
    <div className="py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl font-medium flex justify-center text-sky-600 pb-10">
          My Work
        </h1>
        <p className="font-normal leading-relaxed text-center pb-4">
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
          , my skills and knowledge have come a long way since then. I'm still
          very early in my journey and I know I have a long way to go, but I'm
          so excited to continue to learn and develop my knowledge and skills.
        </p>
      </div>

      <div className="px-10">
        <h3 className="text-center py-2">Some tech I've worked with:</h3>
        <div className="mx-auto grid grid-cols-3 max-w-md">
          {techs.map((t) => (
            <li>{t.tech}</li>
          ))}
        </div>
      </div>
      <div className="mx-auto">
        {projects.map((project: { id: React.Key | null | undefined }) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
