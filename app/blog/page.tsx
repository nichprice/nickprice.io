import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import PostCard from "@/components/postcard";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <title>Contentlayer Blog Example</title>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
    </div>
  );
}
