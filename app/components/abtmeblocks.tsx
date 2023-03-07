import Image from "next/image";

export default function Abtmeblocks({ about }: { about: any }) {
  return (
    <div className="flex flex-col mx-auto w-80 my-10 py-3 rounded-2xl shadow-lg md:min-w-2">
      <div className="">
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
