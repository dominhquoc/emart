import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div className="hero">
      <div className="card border-0">
        <img
          src="https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-backtowork/subhome-xmedia-34//w/1920/IMAGE-landscape-fill-be630125-a936-42b9-9a38-c204eaeb4597-default_0.jpg?ts=1661323695441"
          className="card-img"
          alt="Background"
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title mb-0 fw-bolder display-3">NEW SEASON ARIVALS</h5>
            <p className="card-text lead fs-2">
             CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Product/>
    </div>
  );
};

export default Home;
