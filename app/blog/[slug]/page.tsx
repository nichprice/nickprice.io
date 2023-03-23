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
    <div className="py-10">
      <div className="md:max-w-lg mx-auto">
        <h2 className="text-5xl font-medium pb-3">{post.title}</h2>
        <time dateTime={post.date} className="">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <div
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          className="prose"
        />
      </div>
    </div>
  );
}
