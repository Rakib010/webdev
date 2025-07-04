export default async function ContactSlugPages({ params }) {
  const p = await params;
  console.log(p);
  return (
    <div>
      <p>ContactSlugPages</p>
    </div>
  );
}
