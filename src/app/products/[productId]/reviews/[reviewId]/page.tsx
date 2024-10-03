import React from "react";
import { notFound } from "next/navigation";

export default function page({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h2>
        this is a review of {params.reviewId} for product id {params.productId}
      </h2>
    </div>
  );
}
