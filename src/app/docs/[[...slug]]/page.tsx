import React from "react";

export default function docpage({ params }: { params: { slug: string[] } }) {
  return <h1>This is Catch all segments Example {params.slug}</h1>;
}
