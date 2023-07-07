import { currencies } from "../../context/currencies";

export default function CurrencySelector({ setCurrency ,currency}) {
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
        {currency}
      </button>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-primary border-alter2">
        {currencies.map(({ id, label, symbol }) => (
          <li
            id="currency"
            className="dropdown-item"
            key={id}
            onClick={setCurrency(symbol)}
          >
            ({symbol}) {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
