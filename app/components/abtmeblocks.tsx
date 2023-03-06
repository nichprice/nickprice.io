import Image from "next/image";

export default function Abtmeblocks({ about }: { about: any }) {
  return (
    <div className="py-7 rounded-2xl shadow-lg ">
      <div>
        <img
          alt={about.caption}
          src={about.pic}
          className="object-cover rounded-md mx-auto h-48 w-48"
        />
      </div>
      <p className="p-4 text-center">{about.caption}</p>
    </div>
  );
}
