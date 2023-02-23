import YouTube from "react-youtube";
import { AiFillGithub } from "react-icons/ai";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="rounded-lg shadow-md h-[30] w-[40] py-5 px-5 my-5 flex justify-center">
      <div className="mx-4 bg-orange-200">
        <h2 className="text-3xl font-semibold pt-8 pb-6">{project.title}</h2>
        <p>{project.about}</p>
        <h4>Tech:</h4>
        <ul>{project.tech}</ul>
        <div>
          <a
            href="https://github.com/nichprice"
            className="text-5xl flex justify-center text-[#171515] hover:opacity-80"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="">
        <div className="mx-10 my-10">
          <YouTube videoId={project.youtube} />
        </div>
      </div>
    </div>
  );
}
