import { getBlog } from "./getBlog";

async function BlogPage() {
  const blog = await getBlog();

  return <div>BlogPage - {blog} </div>;
}

export default BlogPage;
