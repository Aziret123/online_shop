import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./addProduct.css";
import { useContext, useState } from "react";
import { productsContext } from "../../context/ProductContextProvider";

export default function AddProduct() {
  const { addProduct } = useContext(productsContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function handleClick() {
    if (!title || !price || !image || !description || !category) {
      alert("Введите все инпуты");
      return;
    }
    let product = {
      title,
      price: parseInt(price),
      image,
      description,
      category,
    };

    addProduct(product);
  }

  return (
    <div className="addProduct">
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Product name"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Photo"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained" disableElevation>
        Add Product
      </Button>
    </div>
  );
}
