import React from "react";
import Product from "../Product/Product";

export default function Products({ info }) {
  return (
    <div>
      <h2>I'm from products</h2>

      {/* nested component. (products + product) */}
      <Product info={info}></Product>
    </div>
  );
}
