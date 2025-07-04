"use client";
import { signIn } from "next-auth/react";
export default function LoginButton() {
  return (
    <div>
      <button
        className="btn p-4 font-bold
      "
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
}
