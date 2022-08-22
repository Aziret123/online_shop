import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const productsContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productDetails: null,
  pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...prevState,
        products: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 6),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  //   Хук useLocation возвращает объект location, представляющий текущий URL. Его можно рассматривать как useState, который возвращает новое местоположение при каждом изменении URL. Этот хук можно использовать, например, чтобы вызвать событие просмотра новой страницы для инструмента веб-аналитики.

  // console.log(location);

  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  };

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  const addProduct = async (product) => {
    await axios.post(API, product);
    getProducts();
    navigate("/");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
    navigate("/");
  };

  const editProduct = async (id, obj) => {
    console.log(obj);
    await axios.patch(`${API}/${id}`, obj);
    getProducts();
    navigate("/");
  };

  const cloud = {
    getProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
    editProduct,
    productsArr: state.products,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <productsContext.Provider value={cloud}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
