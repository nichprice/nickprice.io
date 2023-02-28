import bread from "public/photos/bread.jpeg";
import ski_lift from "public/photos/ski-lift.jpeg";
import pasta from "public/photos/pasta.jpg";
import trivia from "public/photos/trivia_team.jpeg";
import f1 from "public/photos/f1.jpeg";
import Abtmeblocks from "app/components/abtmeblocks.tsx";

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
        {abouts.map((about) => (
          <Abtmeblocks about={about} />
        ))}
      </div>
    </div>
  );
}
