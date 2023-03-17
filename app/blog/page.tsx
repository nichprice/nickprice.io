import PostCard from "../components/postcard";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <title>Contentlayer Blog Example</title>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
