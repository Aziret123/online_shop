import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./EditProduct.css";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/ProductContextProvider";

export default function EditProduct() {
  const { editProduct, productDetails, getOneProduct } =
    useContext(productsContext);

  const [editTitle, setEditTitle] = useState(productDetails.title);
  const [editPrice, setEditPrice] = useState(productDetails.price);
  const [editImage, setEditImage] = useState(productDetails.image);
  const [editDescription, setEditDescription] = useState(
    productDetails.description
  );
  const [editCategory, setEditCategory] = useState(productDetails.category);

  function handleClick() {
    if (
      !editTitle ||
      !editPrice ||
      !editImage ||
      !editDescription ||
      !editCategory
    ) {
      alert("Введите все инпуты");
      return;
    }
    let product = {
      title: editTitle,
      price: parseInt(editPrice),
      image: editImage,
      description: editDescription,
      category: editCategory,
    };

    editProduct(id, product);
  }

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  return (
    <div className="editProduct">
      {productDetails ? (
        <>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Photo"
            variant="outlined"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained" disableElevation>
            Edit Product
          </Button>
        </>
      ) : null}
    </div>
  );
}
