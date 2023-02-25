import YouTube from "react-youtube";
import { AiFillGithub } from "react-icons/ai";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="h-[28rem] min-w-min rounded-lg shadow-md py-5 px-5 my-5 mx-auto flex justify-center">
      <div className="basis-1/3 mx-4 object-scale-down">
        <h2 className="text-3xl font-bold pt-8 pb-6">{project.title}</h2>
        <h4 className="text-xl font-semibold py-3">{project.tech}</h4>
        <p className="text-lg ">{project.about}</p>
        <div className=" justify-self-end">
          <a
            href="https://github.com/nichprice"
            className="text-5xl flex justify-center text-[#171515] hover:opacity-80 "
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="basis-2/3">
        <div className="mx-10 my-10">
          <YouTube videoId={project.youtube} c />
        </div>
      </div>
    </div>
  );
}
