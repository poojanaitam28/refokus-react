import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      title: "arqitel",
      desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      live: true,
      case: false,
    },
    {
      title: "YIR 2024",
      desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      live: true,
      case: true,
    },
  ];
  return (
    <div className="mt-32">
      {products.map((val, index) => (
        <Product key={index} val={val} />
      ))}
    </div>
  );
}

export default Products;
