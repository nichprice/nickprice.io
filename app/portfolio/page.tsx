"use client";
import ProjectsHolder from "../components/projectsholder";

export default function PortfolioPage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">My portfolio so far...</h1>
      <div>
        <ProjectsHolder />
      </div>
    </>
  );
}
