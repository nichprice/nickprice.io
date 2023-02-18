import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import dinner_me from "public/photos/dinner-me.jpeg";

export default function Home() {
  return (
    <section>
      <div className="py-14">
        <h2 className="text-5xl font-medium flex justify-center gap-8 py-3 text-sky-600 ">
          Nick Price
        </h2>
        <h3 className="text-2xl font-medium flex justify-center gap-8 py-1 text-gray-600 opacity-80">
          Developer
        </h3>
      </div>
      <Image src={dinner_me} alt="headshot" className="mx-auto rounded-full" />
      <div className="text-5xl flex justify-center gap-8 py-3 opacity-90">
        <a
          href="https://www.linkedin.com/in/price-nicholas/"
          className="text-blue-800"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/nichprice">
          <AiFillGithub />
        </a>
        <a
          href="https://www.youtube.com/@nickdoesalgos/videos"
          className="text-red-500"
        >
          <AiFillYoutube />
        </a>
      </div>
    </section>
  );
}
