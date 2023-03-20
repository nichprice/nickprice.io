import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-slate-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>
      <div
        className="cl-post-body"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
