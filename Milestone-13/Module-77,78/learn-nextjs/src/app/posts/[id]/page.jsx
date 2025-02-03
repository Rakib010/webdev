export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

// Dynamic way Meta data show 
export async function generateMetadata({ params }) {
  // read route params
  const id = (await params).id;

  // fetch data
  const singlePost = await getSinglePost(id);

  return {
    title: singlePost.title,
    description: singlePost.body,
  };
}

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);
  return (
    <div className="border ">
      <p>{p.id}</p>
      <h1>{singlePost.title}</h1>
      <h2>{singlePost.body}</h2>
    </div>
  );
}
