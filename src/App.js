import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { AddProducts } from "./components/Admin";
import NotFound from "./components/NotFound";
import { ProductsContextProvider } from "./global/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/adminPage" Component={AddProducts} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
