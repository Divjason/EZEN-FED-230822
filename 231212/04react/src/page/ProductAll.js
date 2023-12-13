import React, { useEffect } from "react";

const ProductAll = () => {
  const getProducts = async () => {
    let url = `http://localhost:3004/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div></div>;
};

export default ProductAll;
