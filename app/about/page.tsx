import bread from "public/photos/bread.jpeg";
import ski_lift from "public/photos/ski-lift.jpeg";
import pasta from "public/photos/pasta.jpg";
import trivia from "public/photos/trivia_team.jpeg";
import f1 from "public/photos/f1.jpeg";
import Image from "next/image";

const abouts = {
  baking: { desc: "baking", image: bread },
  snow: { desc: "skiing/snowboarding", image: ski_lift },
  cooking: { desc: "cooking", image: pasta },
  f1: { desc: "f1", image: f1 },
};

export default function About() {
  return (
    <div>
      <div>
        <h1 className="text-5xl font-medium flex justify-center text-sky-600 pb-10">
          About Me
        </h1>
        <p className="font-normal leading-relaxed text-center pb-4">
          A little bit about me
        </p>
      </div>
      <div>
        <h3 className="text-center">Tech I've worked with</h3>
        <ul className="flex flex-col gap-10 py-10 flex-col flex-wrap">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Python</li>
          <li>Django</li>
          <li>Node.js</li>
          <li>Prisma</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>PlanetScale</li>
          <li>SQL</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>HTML</li>
        </ul>
      </div>
      <div>
        <h3>For fun...</h3>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image src={f1} alt="F1 car at the Austin GP" />
            <div>
              <p>f1</p>
            </div>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image src={f1} alt="F1 car at the Austin GP" />
            <div>
              <p>f1</p>
            </div>
          </div>
          <div className="basis-1/3 flex-1 ">
            <Image
              src={f1}
              alt="F1 car at the Austin GP"
              className="object-cover"
            />
            <div>
              <p className="flex mx-auto">f1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
