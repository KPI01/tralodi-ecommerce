"use client"
import { useEffect } from "react";

export default function Carousel() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });

  return (
    <div className="carousel slide mb-5" id="main-slider">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/png/banner-main.png"
            alt="Fondo"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="/png/banner-main.png"
            alt="Fondo"
          />
        </div>
      </div>
      <a
        id="carousel-prev-button"
        className="carousel-control-prev w-auto"
        type="button"
        data-bs-target="#main-slider"
        data-bs-slide="prev"
      >
        <span
          id="carousel-prev-button-icon"
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        id="carousel-next-button"
        class="carousel-control-next w-auto"
        type="button"
        data-bs-target="#main-slider"
        data-bs-slide="next"
      >
        <span
          id="carousel-next-button-icon"
          class="carousel-control-next-icon bg-primary rounded-circle"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  );
}
