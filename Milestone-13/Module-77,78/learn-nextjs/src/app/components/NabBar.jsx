import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold ">Hello</h1>

        {/* Navigation Links */}
        <ul className="md:flex space-x-8 text-lg font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/products/add">Add Products</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
