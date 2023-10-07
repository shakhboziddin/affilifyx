import React, { useContext } from "react";
import { ProductsContext } from "../global/ProductsContext";
import "./css/Products.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Products() {
  const { products } = useContext(ProductsContext);
  console.log(products);

  useEffect(() => {}, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {products.length !== 0 && <h1 className="head">Products</h1>}
      <div className="products-container" data-aos="fade-up">
        {products.length === 0 && <div>Loading...</div>}
        {products.map((product) => (
          <div className="product-card" key={product.ProductID}>
            <a href={product.ProductLink}>
              <div className="product-img">
                <img src={product.ProductImg} alt="not found" />
              </div>
              <div className="info">
                <div className="product-name">{product.ProductName}</div>
                <div className="product-price">${product.ProductPrice}.00</div>
              </div>
              <button className="addcart-btn">Buy</button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
