import React, { createContext, useReducer } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsCart,
} from "../helpers/cartFunctions";

export const cartContext = createContext();

const INIT_STATE = {
  cart: {},
  cartLength: getCountProductsCart(),
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...prevState, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...prevState, cartLength: action.payload };
    default:
      return prevState;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: productItem,
      count: 1,
      subPrice: 0,
    };

    // Хранятся только дубликаты
    let filterCart = cart.products.filter((elem) => {
      return elem.item.id === productItem.id;
    });
    // console.log(filterCart);

    if (filterCart.length > 0) {
      cart.products = cart.products.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      cart.products.push(newProduct);
    }

    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  };

  const getCarts = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const changeProductCount = (id, count) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCarts();
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
    getCarts();
  };

  // ===========================
  const cloud = {
    addProductCart,
    getCarts,
    changeProductCount,
    deleteCartProduct,
    cart: state.cart,
    cartLength: state.cartLength,
  };
  return <cartContext.Provider value={cloud}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
