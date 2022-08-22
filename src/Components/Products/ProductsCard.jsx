import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import "./Products.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContextProvider";
import { checkProductInCart } from "../../helpers/cartFunctions";

const ProductsCard = ({ product }) => {
  const { addProductCart } = useContext(cartContext);

  return (
    <Card
      sx={{
        borderRadius: "20px",
        width: "300px",
        height: "430px ",
        marginBottom: "50px",
      }}
      className="cardProduct"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        title={product.title}
        subheader={`${product.price} сом`}
      />
      <CardMedia
        component="img"
        id="imgSettings"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" id="descText">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-around" }}>
        <IconButton aria-label="add to fav">
          <FavoriteIcon />
        </IconButton>
        <Button
          onClick={() => addProductCart(product)}
          color={checkProductInCart(product.id) ? "error" : "primary"}
        >
          <AddShoppingCartIcon />
        </Button>
        <Button variant="outlined">
          <Link to={`/details/${product.id}`} style={{ color: "blue" }}>
            Подробнее
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsCard;
