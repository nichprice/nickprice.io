import YouTube from "react-youtube";
import Link from "next/link";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";

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

      <YouTube
        videoId={project.youtube}
        className="hidden mx-auto object-scale-down md:flex md:max-w-md lg:max-w-lg"
      />

      <Link
        href={`https://youtu.be/${project.youtube}`}
        className="md:hidden text-[#FF0000] hover:opacity-80"
        target={
          `https://youtu.be/${project.youtube}`.startsWith("http")
            ? "_blank"
            : ""
        }
        rel="noopener noreferrer"
      >
        <AiFillYoutube className="flex mx-auto h-28 w-28" />
      </Link>

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
