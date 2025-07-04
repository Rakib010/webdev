/* import { redirect } from "next/navigation"; */

import dbConnect from "@/lib/dbConnect";
import { getProducts } from "../actions/products/getProducts";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  /* const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  const data = await res.json(); */

  const data = await getProducts();

  // 3 tar besi instert korle redirect kore chole jabe home e
  /* if (data.length > 3) {
    redirect("/");
  }
 */
  return (
    <div className="p-6 max-w-2xl mx-auto bg-slate-400 rounded-lg shadow-md mt-20">
      <h1 className="text-2xl font-bold mb-4 text-center">📦 Product List</h1>
      <ul className="space-y-2">
        {data?.map((singleData, index) => (
          <li
            key={index}
            className="p-3 text-black bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-200"
          >
            {singleData?.productName}
          </li>
        ))}
      </ul>
    </div>
  );
}
