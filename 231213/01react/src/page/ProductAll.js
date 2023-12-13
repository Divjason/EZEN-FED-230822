import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    console.log(searchQuery);
    const url = `https://my-json-server.typicode.com/Divjason/shopping-musinsa/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((menu, index) => (
          <Col key={index} lg={3}>
            <ProductCard item={menu} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
