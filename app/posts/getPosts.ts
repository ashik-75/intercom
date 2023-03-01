export async function getPosts() {
  // await sleep(5000);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return posts;
}

async function sleep(time: number) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Yes it resolved");
    }, time);
  });
}
