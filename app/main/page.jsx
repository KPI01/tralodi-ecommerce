export default function Home() {


  return (
    <div className="container-fluid">
      <div className="carousel slide carousel mb-5" id="main-slider">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/png/banner-main.png" alt="Fondo" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/png/banner-main.png" alt="Fondo" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#main-slider"
          data-bs-slide="prev"
        >
          <span class="btn btn-primary carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#main-slider"
          data-bs-slide="next"
        >
          <span class="btn btn-primary carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="productos-ofertas">
        <h1 className="display-5 fw-bold">Productos en Oferta</h1>
      </div>

      <div id="productos-destacados">
        <h1 className="display-5 fw-bold">Productos Destacados</h1>
      </div>

      <div id="productos-marcas">
        <h1 className="display-5 fw-bold">Nuestras Marcas Aliadas</h1>
      </div>


    </div>
  );
}
