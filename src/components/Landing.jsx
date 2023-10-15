import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ProductList } from "./ProductList";
import { Navlist } from "./NavList";
import { Eleclist } from "./Electlist";
import { Math } from "./Math";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navlist />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodlist" element={<ProductList />} />
          <Route path="/eleclist" element={<Eleclist />} />
          <Route path="/math" element={<Math />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
