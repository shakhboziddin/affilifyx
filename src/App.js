import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { AddProducts } from "./components/Admin";
import NotFound from "./components/NotFound";
import { ProductsContextProvider } from "./global/ProductsContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReactGa from 'react-ga'


const TRACKING_ID = 'G-LYWS7SZRY5'
ReactGa.initialize(TRACKING_ID)




function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/adminPage" Component={AddProducts} />
          <Route path="/*" Component={NotFound} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
