import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log("id is", id);

  const getProductDetail = async () => {
    let url = `my-json-server.typicode.com/Minimoocodes/react_hmmall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="item_details">
      <img src={product?.img} />
      <div className="text_details">
        <h3>{product?.title}</h3>
        <p>{product?.price}</p>
        <p>{product?.choice === true ? "conscious chioce" : ""}</p>
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Choose size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="add_btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
