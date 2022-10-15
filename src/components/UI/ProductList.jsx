import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};
