"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function NavBar() {
  const pathname = usePathname();
 // console.log(pathname);
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center ">
          <ul className="flex justify-around w-1/2">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Service</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
}
