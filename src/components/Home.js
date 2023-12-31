import React, { useEffect } from "react";
import Products from "./Products";
import "./css/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <section className="header">
        <div className="header_child">
          <div className="content">
            <h3>Hoodies / Jeans</h3>
            <h1>Autumn Value Pack</h1>
            <h4>cool / colorful / comfy</h4>
            <a href="#products" className="btn">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="card-1" data-aos="fade-right">
          <h3>Low Price</h3>
          <h1>High Coziness</h1>
          <h4>UPTO 50% OFF</h4>

          <a href="#products">Explore Items</a>
        </div>
        <div className="card-2" data-aos="fade-left">
          <h3>Beyoung Presents</h3>
          <h1>Breezy Autumn Style</h1>
          <h4>UPTO 50% OFF</h4>

          <a href="#products">Explore Items</a>
        </div>
      </section>

      <section className="products" id="products">
        <Products />
      </section>
    </div>
  );
}

export default Home;
