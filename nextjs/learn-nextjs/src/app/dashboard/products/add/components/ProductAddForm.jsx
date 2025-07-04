"use client";

import { postSingleProduct } from "@/app/actions/products/postSingleProduct";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductAddForm() {
  const [productName, setProductName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Product Submitted:", productName);
    const payload = { productName };
    /* const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
    const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json(); */
    
    const result = postSingleProduct(payload);

    router.push("/products");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-20">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
          className="w-full text-black p-3 border rounded-md focus:ring focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
