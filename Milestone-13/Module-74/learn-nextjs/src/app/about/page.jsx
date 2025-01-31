"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  // conditional rendering time useRoute use hobe
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  
  return (
    <div>
      <p>AboutPages </p>
      <p>
        <Link href="/about/address">Go To Address Page</Link>
      </p>
      <button type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
}
