---
title: Inverse Data Flow
date: 2022-05-31
---

Coding can get… erm… confusing.

In my last post, I wrote about callback functions in JavaScript. I covered a very simple callback function, probably one of the most simple examples you’ll be able to find on the internet. In most practical applications, callback functions are more complicated.

Fortunately and unfortunately, as developers learn React.js, callback functions are reintroduced. This time, they’re more complicated than my highly simplified example of a few weeks ago, but in my opinion, they’re much more easy to grasp than most examples of vanilla JavaScript callback functions.

Let’s dive in to inverse data flow.

In react, you can do what’s called “passing state”. State can be defined for any variable that is subject to change based on a users interaction with it via the DOM. Think of instagram’s like button. When the page first renders displaying a post that you haven’t previously seen or interacted with, the “like” button’s default state is set to “not liked”, as indicated by an empty heart.

When you, the user, interacts with the DOM and “likes” the post, you have edited the state of the like button, and likely made a post request.

Let’s now right this in code. I’m assuming you already have some indication of how state works.

Here are three screenshots of three files. Instagram is the parent of IGPost, and IGPost is the parent of PostCard.

    export default function Instagram() {
        const [posts, setPosts] = useState([]);
        const [like, setLike] = useState("");

        function toggle() {
            setLike(!like)
        }

        useEffect(() => {
            fetch("http://instagram")
            .then(r => r.json())
            .then(d => setPosts(d))
        }, [])

        return(
            <IGPost
                posts={posts}
                toggle={toggle}
                like={like}
            />
        )
    }

Here we set the state of our “posts” and our “like” as well as our “toggle” function. We then pass this data to the child component, IGPost.

    export default function IGPost({ posts, like, toggle }) {
        return {
            <div>
                {posts.map((post) => {
                    <PostCard
                        key={post.id}
                        post={post}
                        like={like}
                        toggle={toggle}
                    />
                })}
            </div>
        }
    }

IGPost receives this data, and will render one PostCard child component for each object in the array of posts. The PostCard child component will look like this:

    export default function PostCard({ post, like, toggle }) {
        return(
            <div>
                {post}
                <button onClick={toggle}>
                    {like ? '♡' : '❤️'}
                </button>
            </div>
        )
    }

Finally we reach our like button. When this button is clicked, we run our “toggle” function which will change the state of our “like”(which exists in our most Parent component) back and forth between an empty heart and a full one.
