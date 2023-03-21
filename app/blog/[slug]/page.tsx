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
    <section className="mx-auto px-10 py-10">
      <div className="max-w-lg mx-auto">
        <div className="pb-7">
          <h1 className="text-5xl font-medium pb-3">{post.title}</h1>
          <time dateTime={post.date} className="">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </section>
  );
}
