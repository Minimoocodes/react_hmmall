import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      let searchQuery = query.get("q") || "";
      let url = `my-json-server.typicode.com/Minimoocodes/react_hmmall/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
