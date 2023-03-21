import Image from "next/image";

export default function Abtmeblocks({ about }: { about: any }) {
  return (
    <div className="flex flex-col w-72 mx-auto rounded-2xl shadow-lg">
      <div className="pt-6">
        <img
          alt={about.caption}
          src={about.pic}
          className="object-cover rounded-md mx-auto h-48 w-48"
        />
      </div>
      <p className="pt-4 pb-6 text-center">{about.caption}</p>
    </div>
  );
}
