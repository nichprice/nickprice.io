import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import PostCard from "@/components/postcard";

export default function BlogPage() {
  return (
    <div className="py-16">
      <div className="md: max-w-lg mx-auto text-center">
        <title>Blog</title>

        <h1 className="mb-10 text-5xl font-medium text-sky-600">Blog</h1>

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
    </div>
  );
}
