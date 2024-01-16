import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login/" />;
};

export default PrivateRoute;

// 이 페이지가 하는 일 : authenticate가 true 면 product detail을 보여주고,
// false 이면 로그인 페이지로 리다이렉트
