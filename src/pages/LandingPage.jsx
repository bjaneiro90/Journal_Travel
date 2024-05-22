import { PostCard } from "../components/PostCard";
import posts from "../data/posts.json";
console.log(posts);

export function LandingPage() {
    return (
        <main>
            {posts.map((post) => {
                return <PostCard post={post} key={post.id}/>
            })}
        </main>
    );
}
