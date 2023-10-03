import React, { useContext } from "react";
import { ProductsContext } from "../global/ProductsContext";
import "./css/Products.css";
import { useEffect } from "react";

function Products() {
  const { products } = useContext(ProductsContext);
  console.log(products);

  useEffect(() => {}, []);

  return (
    <>
      {products.length !== 0 && <h1>Products</h1>}
      <div className="products-container">
        {products.length === 0 && <div>Loading...</div>}
        {products.map((product) => (
          <div className="product-card" key={product.ProductID}>
            <a href={product.ProductLink}>
              <div className="product-img">
                <img src={product.ProductImg} alt="not found" />
              </div>
              <div className="product-name">{product.ProductName}</div>
              <div className="product-price">${product.ProductPrice}.00</div>
              <button className="addcart-btn">Buy</button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
