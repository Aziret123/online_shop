import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import Authorization from "./Components/Auth/Authorization";
import Cart from "./Components/Cart/Cart";
import EditProduct from "./Components/EditProduct/EditProduct";
import Home from "./Components/Home/Home";
import ProductsDetails from "./Components/Products/ProductsDetails";
import ProductsList from "./Components/Products/ProductsList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/details/:id" element={<ProductsDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
