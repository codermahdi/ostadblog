export default async function getAllPosts() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");

  if (!res.ok) {
    console.log("Error Hocce");
  }

  return res.json();
}

export async function getSinglePost(id) {
  const res = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
  );

  if (!res.ok) {
    console.log("Error Hocce");
  }

  return res.json();
}
