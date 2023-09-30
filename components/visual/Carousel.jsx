"use client";
import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  });

  return (
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="4000">
          <img src="/png/banner-main.png" class="d-block w-100" alt="Banner 1" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="..." class="d-block w-100" alt="Banner 2" />
        </div>
        <div class="carousel-item" data-bs-interval="4000">
          <img src="..." class="d-block w-100" alt="Banner 3" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
