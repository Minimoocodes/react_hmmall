import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  //   const id = useParams();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className="product_card" onClick={showDetail}>
      <img className="product_image" src={item?.img} alt="product" />
      <div>{item?.choice === true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}sek</div>
      <div>{item?.new === true ? "new" : ""}</div>
    </div>
  );
};

export default ProductCard;
