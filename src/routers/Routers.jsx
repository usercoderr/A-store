import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Cart,
  Checkout,
  Home,
  Login,
  ProductDetails,
  Shop,
  SignUp,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="home" />} />
      <Route exact path="home" element={<Home />} />
      <Route exact path="cart" element={<Cart />} />
      <Route
        exact
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      /> 
      <Route exact path="login" element={<Login />} />
      <Route exact path="shop" element={<Shop />} />
      <Route exact path="shop/:id" element={<ProductDetails />} />
      <Route exact path="signup" element={<SignUp />} />
    </Routes>
  );
};
