import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Image from "next/image";
import dinner_pic from "public/photos/dinner-pic.jpeg";

export default function Home() {
  return (
    <section className="mx-auto px-40 w-max h-max py-10 shadow-md">
      <div>
        <h1 className="text-5xl font-medium flex justify-center text-sky-600 ">
          Nick Price
        </h1>
        <h4 className="py-3 text-2xl font-medium flex justify-center text-gray-600 opacity-80">
          Software Engineer
        </h4>
      </div>
      <div className="">
        <Image
          src={dinner_pic}
          alt="headshot"
          className="mx-auto rounded-full w-64 h-64"
        />
      </div>
      <div>
        <h2 className="text-3xl font-semibold pt-8 pb-6">Hi, I'm Nick.</h2>
        <ul className="w-[25rem] font-normal leading-relaxed pb-4">
          <li className="pb-4">Thanks for stopping by!</li>
          <li className="pb-4">
            I studied fullstack development at the Flatiron School and earned
            both a BS in Kinesiology and a BA in Psychology at Rutgers
            University while competing as member of the Cross Country and Track
            and Field teams.
          </li>
          <li className="pb-4">
            TLDR: I really like to try and understand things.
          </li>
          <li className="pb-4">
            <a href="/about" className="text-orange-400 hover:opacity-60">
              Learn more about me here.
            </a>
          </li>
        </ul>
      </div>
      <div className="text-5xl flex justify-center gap-8 py-8 ">
        <a
          href="https://www.linkedin.com/in/price-nicholas/"
          className="text-[#0072b1] hover:opacity-80"
        >
          <AiFillLinkedin />
        </a>

        <a
          href="https://twitter.com/nickpriceio"
          className="text-[#1DA1F2] hover:opacity-80"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://github.com/nichprice"
          className="text-[#171515] hover:opacity-80"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.youtube.com/@nickdoesalgos/videos"
          className="text-[#FF0000] hover:opacity-80"
        >
          <AiFillYoutube />
        </a>
      </div>
    </section>
  );
}
