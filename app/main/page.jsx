import { ofertas } from "../context/productos/ofertas";
import { marcas } from "../context/marcas";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="carousel slide carousel mb-5" id="main-slider">
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
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#main-slider"
          data-bs-slide="prev"
        >
          <span
            class="btn btn-primary carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#main-slider"
          data-bs-slide="next"
        >
          <span
            class="btn btn-primary carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div id="productos-ofertas" className="my-5 mx-auto">
        <h1 className="display-5 fw-bold">Productos en Oferta</h1>
        <div className="container-fluid d-flex gap-3">
          {ofertas.map(({ id, label, price, percent }) => (
            <div className="card bg-alter1 text-primary border-0" product={id}>
              <img src="/productos/ofertas" alt={label} />
              <div className="card-body text-left">
                <h5 className="card-title">{label}</h5>
                <p className="card-text">
                  $ {price} <small>con IVA</small>
                </p>
                <p className="card-text">Rebajado %{percent}!</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="productos-destacados">
        <h1 className="display-5 fw-bold">Productos Destacados</h1>
      </div>

      <div id="productos-marcas">
        <h1 className="display-5 fw-bold">Nuestras Marcas Aliadas</h1>
        <div id="marcas-carousel" class="carousel slide my-5">
          <div class="carousel-inner">
            {marcas.map(({label,i}) => (
              <div className="carousel-item">
                {i}
              </div>
            ))}
            <div class="carousel-item active"></div>
            <div class="carousel-item"></div>
            <div class="carousel-item"></div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#marcas-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
