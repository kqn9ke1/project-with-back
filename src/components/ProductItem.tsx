import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductType } from "../models/product";
import { Grid } from "@mui/material";

type ProductItemProps = {
  item: ProductType;
};

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  return (
    <Grid item xs={10} md={6} lg={4} sx={{ mt: "30px" }}>
      <Card>
        <CardMedia
          sx={{ height: "180px" }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6">${item.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ProductItem;
