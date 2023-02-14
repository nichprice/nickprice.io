"use client";
import useSWR from "swr";

const fetcher = (...params) => fetch(...params).then((res) => res.json());

export default function portfolio() {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">My Portfolio</h1>
      <p>{data.title}</p>
    </>
  );
}
