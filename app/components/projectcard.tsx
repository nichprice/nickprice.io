import YouTube from "react-youtube";
import Link from "next/link";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="rounded-xl shadow-md my-3 max-w-md mx-auto hover:shadow-lg">
      <div className="p-8 mx-auto">
        <div className="pb-8 flex mx-auto">
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
        <div className="mx-auto max-w-sm flex flex-col">
          <iframe
            className="w-full aspect-video mx-auto"
            src={`https://youtube.com/embed/${project.youtube}`}
          >
            {/* YouTube player */}
          </iframe>
        </div>
        <div className="max-w-md">
          <h4 className="text-2xl font-semibold pt-8 pb-5">{project.tech}</h4>
          <p className="text-lg mx-auto">{project.about}</p>
        </div>
      </div>
    </div>
  );
}
