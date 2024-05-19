import posts from "../data/posts.json";
console.log(posts);

export function LandingPage() {
    return (
        <main>
            {posts.map((post) => {
                return (
                    <article key={post.id}>
                        <section>
                            <img src={post.user.avatarURL} alt="" />
                            <h2>{post.title}</h2>
                        </section>
                        <img src={post.mainImage} alt={"imagem de " + post.title} />
                        <section>
                            <div>
                                <span>{post.likes}</span>
                                <button>
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div>
                                <span>{post.comments}</span>
                                <button>
                                    <span className="material-symbols-outlined">comment</span>
                                </button>
                            </div>
                        </section>
                    </article>
                );
            })}
        </main>
    );
}
