"use client";

// import bread from "public/photos/bread.jpeg";
// import ski_lift from "public/photos/ski-lift.jpeg";
// import pasta from "public/photos/pasta.jpg";
// import trivia from "public/photos/trivia_team.jpeg";
// import f1 from "public/photos/f1.jpeg";
// import Image from "next/image";
import Abtmeblocks from "../components/abtmeblocks";
import React, { useEffect, useState } from "react";

export default function About() {
  const [abouts, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("api/abouts")
      .then((res) => res.json())
      .then((abouts) => {
        setData(abouts);
      });
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-5xl font-medium flex justify-center text-sky-600 pb-10">
        About me
      </h1>
      <div className="md:flex mx-auto">
        <div className="md:max-w-lg mx-auto">
          <h3 className="text-3xl font-semibold pb-6">
            Thanks for stopping by!
          </h3>

          <p className="font-normal leading-relaxed pb-4">
            I {"(attempt to)"} write code! I've been learning about software
            engineering and web developement for about a year now, and have been
            having a blast doing so. I split most of my time between praticing
            the fundamentals and learning new technologies. I believe the best
            approach to learning involes focusing on the basics and core
            concepts that explain of how/why modern tech is the way it is. With
            that understanding new tech becomes more useful and more powerful.
          </p>
          <p className="font-normal pb-4">
            I've always been a bit of a nerd at heart. I enjoy numbers and
            science {"(favorite highschool classes: Accounting and AP Chem)"}{" "}
            and I also really enjoy understanding how things work and the
            stories that explain why that is{" "}
            {
              "(favorite college courses: Developement of Europe, Anatomy, and Physics I & II)"
            }
            . I love teamwork and collaboration {"(Country > Track and Field)"},
            and I really like to flex my creative muscle from time to time{" "}
            {
              "(my childhood involved a lot of playing with legos and building remote control cars)"
            }
            .
          </p>
          <p className="font-normal pb-4">
            I spend a lot of time nerding out on exercise science. My two
            favorite ways to excercise are cycling and lifting. I'm a big sports
            fan, namely F1 and football. Although I'm happy as long as there's
            good racing in F1, I really admire Toto Wolff and what he's been
            able to accomplish in the sport so I find myself a defacto Mercedes
            fan. When it comes to football, I'm probably the biggest Jets fan
            you'll ever meet.
          </p>
          <p className="font-normal pb-4">
            I really enjoy cooking and coffee. Learning from Thomas Keller,
            Marco Pierre White, and of course, Babish, has completely changed
            how I approach both cooking and eatting. To me coffee is more than
            just how I start my day, it's a hobby. There's something special
            about grinding fresh beans and watching water slowly boil through
            the spout of a Moka pot.
          </p>
        </div>
        <div className="mx-auto">
          <p className="text-3xl font-semibold pt-8 pb-6">Let's chat about:</p>
          <div className=" md:grid md:grid-cols-1 md:gap-3 lg:grid-cols-2">
            {abouts.map((about: { id: React.Key | null | undefined }) => (
              <Abtmeblocks key={about.id} about={about} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
