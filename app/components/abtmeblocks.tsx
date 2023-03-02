import Image from "next/image";

export default function Abtmeblocks({ about }: { about: any }) {
  return (
    <div>
      <Image alt={about.caption} src={about.pic} width={40} height={40} />
      <p>{about.caption}</p>
    </div>
  );
}
