import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartContext } from "../../context/CartContextProvider";
import { productsContext } from "../../context/ProductContextProvider";
import { checkProductInCart } from "../../helpers/cartFunctions";

const ProductsDetails = () => {
  const { getOneProduct, productDetails, deleteProduct } =
    useContext(productsContext);
  const { addProductCart } = useContext(cartContext);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <div className="cont">
          <div className="boxDetails">
            <div className="boxDetails_left">
              <img src={productDetails.image} alt={productDetails.title} />
            </div>
            <div className="boxDetails_right">
              <h3 id="category">{productDetails.category}</h3>
              <p>{productDetails.description}</p>
              <h4>{productDetails.price} сом</h4>
              <button
                className={`btn ${
                  checkProductInCart(productDetails.id)
                    ? "btn-danger"
                    : "btn-success"
                }`}
                onClick={() => addProductCart(productDetails)}
              >
                Добавить в корзину
              </button>
              <div className="right_adminBtn">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(productDetails.id)}
                >
                  Удалить
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/edit/${id}`)}
                >
                  Редактировать
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductsDetails;
