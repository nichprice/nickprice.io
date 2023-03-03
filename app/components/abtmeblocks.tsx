import Image from "next/image";

export default function Abtmeblocks({ about }: { about: any }) {
  return (
    <div className="w-80 h-80 rounded-2xl shadow-lg ">
      <Image
        alt={about.caption}
        src={about.pic}
        width={400}
        height={400}
        className="object-scale-down"
      />
      <p>{about.caption}</p>
    </div>
  );
}
