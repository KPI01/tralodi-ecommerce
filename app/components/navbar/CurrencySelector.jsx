export default function CurrencySelector() {
  return (
    <div className="btn-group" id="currrency-selector">
      <button
        type="button"
        class="btn btn-primary text-secondary shadow-none dropdown-toggle"
        id="currency-selector-btn"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        Moneda
      </button>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-primary border-alter2">
        <li className="dropdown-item" id="currency">
          ($) Dólares
        </li>
        <li className="dropdown-item" id="currency">
          (Bs.) Bolívares
        </li>
      </ul>
    </div>
  );
}
