import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function NewestBlog() {
  const posts = await getAllPosts();

  return (
    <main className="grid grid-cols-5 gap-5 mb-5">
      {posts.map((data, index) => (
        <div
          className="p-5 border inline-block border-cyan-600 mt-2 ms-2"
          key={index}
        >
          <Link href={`/post-details/${data.id}`}>
            <h1 className="text-xl mb-2">{data.title}</h1>
            <p>{data.short}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}
