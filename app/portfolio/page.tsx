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
        <h3 className="text-center">Tech I've worked with</h3>
        <ul className="grid grid-cols-3 gap-2">
          <div className="mx-auto">
            <li>JavaScript</li>
          </div>
          <div className="mx-auto">
            <li>TypeScript</li>
          </div>
          <div className="mx-auto">
            <li>React</li>
          </div>
          <div className="mx-auto">
            <li>Python</li>
          </div>
          <div className="mx-auto">
            <li>Django</li>
          </div>
          <div className="mx-auto">
            <li>Node.js</li>
          </div>
          <div className="mx-auto">
            <li>Prisma</li>
          </div>
          <div className="mx-auto">
            <li>Ruby</li>
          </div>
          <div className="mx-auto">
            <li>Ruby on Rails</li>
          </div>
          <div className="mx-auto">
            <li>PlanetScale</li>
          </div>
          <div className="mx-auto">
            <li>SQL</li>
          </div>
          <div className="mx-auto">
            <li>MySQL</li>
          </div>
          <div className="mx-auto">
            <li>SQLite</li>
          </div>
          <div className="mx-auto">
            <li>CSS</li>
          </div>
          <div className="mx-auto">
            <li>Tailwind</li>
          </div>
          <div className="mx-auto">
            <li>HTML</li>
          </div>
        </ul>
      </div>
      <div className="max-w-3xl mx-auto">
        {projects.map((project: { id: React.Key | null | undefined }) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
