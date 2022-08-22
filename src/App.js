import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductContextProvider>
          <NavBar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
