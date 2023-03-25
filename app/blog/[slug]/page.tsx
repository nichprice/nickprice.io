import { allBlogs, type Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export default function Post({ params }: { params: any }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16">
      <div className="max-w-lg mx-auto">
        <div className="pb-6">
          <h2 className="text-4xl font-bold pb-3">{post.title}</h2>
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          className="prose"
        />
      </div>
    </div>
  );
}
