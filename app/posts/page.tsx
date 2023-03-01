import { getPosts } from "./getPosts";

type PostType = {
  userid: number;
  id: number;
  title: string;
  body: string;
};

async function page() {
  const posts = await getPosts();
  return (
    <div>
      <ul>
        {posts.map((post: PostType) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default page;
