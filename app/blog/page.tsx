import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostCard from '../components/postcard'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }

export default function Blog() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
