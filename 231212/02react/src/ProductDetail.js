import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const { id, brand, num } = useParams();
  return (
    <div>
      <h1>상품카테고리 {id}</h1>
      <h1>브랜드: {brand}</h1>
      <h1>상품품번 {num}</h1>
    </div>
  );
};

export default ProductDetail;
