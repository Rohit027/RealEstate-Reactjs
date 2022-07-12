import React from "react";
import img1 from "../images/Image2.jpg";
import img2 from "../images/Image1.jpg";
import img3 from "../images/Image3.jpg";
import img4 from "../images/Image4.jpg";

function ImageSilder() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "100vw", maxHeight: "100vh" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active img-overlay">
            <img
              src={img1}
              className="d-block bgImg"
              alt={img1}
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
          <div className="carousel-item img-overlay">
            <img
              src={img2}
              className="d-block bgImg"
              alt={img2}
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
          <div className="carousel-item img-overlay">
            <img
              src={img3}
              className="d-block bgImg"
              alt={img3}
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
          <div className="carousel-item img-overlay">
            <img
              src={img4}
              className="d-block bgImg"
              alt={img4}
              style={{ width: "100%", height: "100vh" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ImageSilder;
