"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MealSearchInput() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (search.trim() === "") return;
    const url = `${pathname}?search=${search}`;
    router.push(url);
  }, [search, pathname, router]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a meal..."
        className="border p-2 rounded-md bg-slate-400 mb-4"
      />
    </div>
  );
}
