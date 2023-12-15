import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(undefined);
  const { id } = useParams();
  const getProductDetail = async () => {
    setLoading(true);
    const url = `https://my-json-server.typicode.com/Divjason/shopping-musinsa/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product === undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <DropdownMenu>
              {product?.size.length > 0 &&
                product?.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action">
                    {item}
                  </Dropdown.Item>
                ))}
            </DropdownMenu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
