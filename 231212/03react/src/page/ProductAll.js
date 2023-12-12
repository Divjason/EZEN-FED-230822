import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert } from "react-bootstrap";

const ProductAll = () => {
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProducts(data);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container>
      <Row>
        {products.map((item) => (
          <Col md={3} sm={12} key={item.id}>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
