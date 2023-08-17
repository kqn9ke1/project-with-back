import React, { useEffect } from "react";
import { useProductContext } from "../contexts/ProductContext/ProductContext";
import ProductItem from "../components/ProductItem";
import { Grid } from "@mui/material";

const HomePage = () => {
  const { products, getProducts } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default HomePage;
