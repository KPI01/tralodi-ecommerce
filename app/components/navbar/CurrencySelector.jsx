export default function CurrencySelector() {
  return (
    <div className="dropdown mx-2 my-auto">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Moneda
      </button>

      <ul className="dropdown-menu bg-primary border-0">
        <li className="dropdown-item">($) Dólares</li>
        <li className="dropdown-item">(Bs.) Bolívares</li>
      </ul>
    </div>
  );
}
