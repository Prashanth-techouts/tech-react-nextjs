import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h2>Product Details page.{params.productId} </h2>
    </div>
  );
}
