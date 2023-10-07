import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { Navlist } from "./NavList";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navlist />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
