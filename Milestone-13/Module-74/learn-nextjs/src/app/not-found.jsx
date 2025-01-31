import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <p>404 Not Found</p>
      <h1>
        <Link href="/">Go Back to Home</Link>
      </h1>
    </div>
  );
}
