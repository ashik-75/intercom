import axios from "axios";

export async function getBlog() {
  const blog = await axios.get("http://localhost:3000/api/blog");
  return blog.data;
}
