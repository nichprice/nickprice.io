import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function PostCard({ post }: { post: any }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={`blog/${post.slug}`}>{post.title}</Link>
      </h2>
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}
