import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "All posts",
  description: "Loading JSON placeholder posts using Server Component ",
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {posts.map((singleData) => (
        <div key={singleData.id} className="border p-4 rounded-lg shadow-md">
          <p className="testing-purpose-css-class">
            <span className="text-xl font-bold text-orange-400">Title: </span>
            {singleData.title}
          </p>
          <p>
            <span className="text-xl font-bold">Description: </span>
            {singleData.body}
          </p>
          <Link
            href={`/posts/${singleData.id}`}
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}
