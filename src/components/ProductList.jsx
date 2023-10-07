import React, { useState, useEffect } from "react";
import { CatList } from "./CatList";
import { ProductItem } from "./ProductItem";
import axios from "axios";
import { Grid } from "@mui/material";

export const ProductList = () => {
  const [data, setData] = useState([]);
  const [SelectCat, setSelectCat] = useState("jewelery");

  const getData = async () => {
    const result = await axios.get(
      `https://fakestoreapi.com/products/category/${SelectCat}`
    );
    setData(result.data);
  };

  const handleSelectedCat = (cat) => {
    setSelectCat(cat);
  };

  useEffect(() => {
    getData();
  }, [SelectCat]);

  return (
    <React.Fragment>
      <Grid container spacing={2} align="center">
        <Grid item xs={12}>
          <CatList handleSelectedCat={handleSelectedCat} />
        </Grid>
        {data.map((item) => (
          <ProductItem item={item} />
        ))}
      </Grid>
    </React.Fragment>
  );
};
