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
      <div className="mx-auto">
        <div className="md:max-w-lg mx-auto">
          <h3 className="text-3xl font-semibold pb-6">
            Thanks for stopping by!
          </h3>

          <ul>
            <li>I write code! Mostly JS and Python.</li>
            <li>I’m passionate about science and problem solving.</li>
            <li>I love lifting and endurance training.</li>
            <li>Toto Wolff is my hero.</li>
            <li>Thomas Keller changed the way I cook.</li>
            <li>I’m probably the biggest Jets fan you’ll ever meet.</li>
            <li>I’m a diehard Mokapot enthusiest.</li>
          </ul>
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
