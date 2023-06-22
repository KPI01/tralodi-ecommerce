export default function Home() {


  return (
    <div className="container-fluid">
      <div className="carousel slide carousel-fade" id="main-slider">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/png/banner-main.png" alt="Fondo" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#main-slider"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#main-slider"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      
    </div>
  );
}
