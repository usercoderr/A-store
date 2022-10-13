import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Checkout,
  Home,
  Login,
  ProductDetails,
  Shop,
  SignUp,
} from "../pages";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/shop/:id" element={<ProductDetails />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
};
