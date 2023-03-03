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
    <div>
      <h1 className="text-3xl font-bold underline">Page under construction</h1>
      <div>
        <h1 className="text-5xl font-medium flex justify-center text-sky-600 pb-10">
          About Me
        </h1>
        <p className="font-normal leading-relaxed text-center pb-4">
          A little bit about me
        </p>
      </div>

      <div>
        <h3>For fun...</h3>
        <div className="grid grid-cols-3">
          {abouts.map((about: { id: React.Key | null | undefined }) => (
            <Abtmeblocks key={about.id} about={about} />
          ))}
        </div>
      </div>
    </div>
  );
}
