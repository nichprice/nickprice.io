import YouTube from "react-youtube";
import { AiFillGithub } from "react-icons/ai";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="rounded-xl shadow-md p-10 my-10 hover:shadow-lg">
      <div className="pb-8 flex">
        <div className="">
          <a
            href="https://github.com/nichprice"
            className="text-5xl text-[#171515] hover:opacity-80 "
          >
            <AiFillGithub />
          </a>
        </div>
        <div className="px-3">
          <a className="text-3xl font-bold">{project.title}</a>
        </div>
      </div>

      <div className="flex mx-auto">
        <YouTube
          videoId={project.youtube}
          className="flex mx-auto object-scale-down w-80"
        />
      </div>
      <div className="">
        <h4 className="text-2xl font-semibold flex justify-center pt-8 pb-5">
          {project.tech}
        </h4>
        <p className="text-lg text-center max-w-md mx-auto flex justify-center">
          {project.about}
        </p>
      </div>
    </div>
  );
}
